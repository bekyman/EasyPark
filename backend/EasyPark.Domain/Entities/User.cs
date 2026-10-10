using EasyPark.Domain.Enums;

namespace EasyPark.Domain.Entities;

public class User
{
    public Guid Id { get; set; }

    public string FirstName { get; set; } = string.Empty;

    public string LastName { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public UserRole Role { get; set; }

    public DateTime CreatedAt { get; set; }

    public ICollection<Vehicle> Vehicles { get; set; } = new List<Vehicle>();

    public ICollection<ParkingFacility> ParkingFacilities { get; set; } =
        new List<ParkingFacility>();

    public ICollection<Reservation> Reservations { get; set; } =
        new List<Reservation>();
}