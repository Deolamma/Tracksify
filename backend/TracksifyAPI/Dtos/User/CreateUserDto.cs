﻿using TracksifyAPI.Models;

namespace TracksifyAPI.Dtos.User
{
    /**
     * CreateUserDto - this is a request Dto create a new User
     */
    public class CreateUserDto
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
    }
}