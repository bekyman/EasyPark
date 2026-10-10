using EasyPark.Domain.Enums;
namespace EasyPark.Domain.Entities;

public class ParkingArea
{
    public Guid Id { get; set; }

    public Guid ParkingFacilityId { get; set; }

    public string Name { get; set; } = string.Empty;

    public string? Description { get; set; }

    public ParkingFacility ParkingFacility { get; set; } = null!;

    public ICollection<ParkingSpace> ParkingSpaces { get; set; } =
        new List<ParkingSpace>();
}