using EasyPark.Domain.Enums;

namespace EasyPark.Domain.Entities;

public class ParkingSpace
{
    public Guid Id { get; set; }

    public Guid ParkingAreaId { get; set; }

    public string SpaceNumber { get; set; } = string.Empty;

    public ParkingSpaceType Type { get; set; }

    public ParkingSpaceStatus Status { get; set; }

    public decimal HourlyRate { get; set; }

    public ParkingArea ParkingArea { get; set; } = null!;

    public ICollection<Reservation> Reservations { get; set; } =
        new List<Reservation>();
}