﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TracksifyAPI.Dtos.User;
using TracksifyAPI.Helpers;
using TracksifyAPI.Interfaces;
using TracksifyAPI.Mappers;

namespace TracksifyAPI.Controllers
{
    //TODO: Implement Authorization for different endpoints
    /**
     * UserController - Controller class for the User endpoints. Serves as a gateway to the endpoints
     *  - Inherits: This class inherits from the ControllerBase class. Gives access to the Attributes
     */
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        /**
         * GetAll - Gets all the users in the database based on some defined query object
         * @query: query parameter specified in the QueryObject class
         * Return: Returns the result based on the query. If no query is specified it returns all users
         */
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] UserQueryObject query)
        {
            // Checks for validation errors. returns bool.
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            // Get all users from DB
            var users = await _userRepository.GetAllUsersAsync(query);

            // Mapping each user to it's response Dto
            var userDto = users.Select(u => u.ToUserDto());

            return Ok(userDto);

        }

        /**
         * GetById - Gets a User by their Global Unique Identifier
         * @userId: userId of the user to be retrieved. This would be gotten from the url
         * Return: returns a User or Not Found()
         */
        [HttpGet("{userId:Guid}")]
        public async Task<IActionResult> GetById([FromRoute] Guid userId)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (await _userRepository.UserExistsAsync(userId))
            {
                var user = await _userRepository.GetUserByIdAsync(userId);

                var userDto = user!.ToUserDto();

                return Ok(userDto);

            }
            return NotFound();
        }

        /**
         * Create - Creates a new User
         * @userCreateDto: This is the request Dto that will be mapped to a userObject
         * Return: Returns a User Dto
         */
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateUserDto userCreateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = userCreateDto.ToUserFromCreateUserDto();
             
            await _userRepository.CreateUserAsync(user);

            return CreatedAtAction(
                nameof(GetById),
                new {userId = Guid.NewGuid()},
                user.ToUserDto());
        }

        /**
         * Update - Updates a User data
         * @userId: Unique identifier of user to be updated. It is retrieved from route
         * @updateUserDto: This is the update request Dto that will be mapped to the user to be updated
         * Return: Returns a User Dto
         */
        [HttpPut]
        [Route("{userId}")]
        public async Task<IActionResult> Update([FromRoute] Guid userId, [FromBody] UpdateUserDto updateUserDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (await _userRepository.UserExistsAsync(userId))
            {
                var user = await _userRepository.UpdateUserAync(userId, updateUserDto);

                return Ok(user!.ToUserDto());
            }

            return NotFound();
        }
    }
}