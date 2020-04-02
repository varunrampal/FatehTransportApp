using Microsoft.EntityFrameworkCore.Migrations;

namespace FatehApp.API.Migrations
{
    public partial class AddedOriginCityColumnInQuote : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OriginCity",
                table: "Quotes",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OriginCity",
                table: "Quotes");
        }
    }
}
