using EasyPark.Domain.Enums;

namespace EasyPark.Domain.Entities;

public class Vehicle
{
    public Guid Id { get; set; }

    public Guid UserId { get; set; }

    public string LicensePlate { get; set; } = string.Empty;

    public string? Make { get; set; }

    public string? Model { get; set; }

    public VehicleType Type { get; set; }

    public User User { get; set; } = null!;

    public ICollection<Reservation> Reservations { get; set; } =
        new List<Reservation>();
}