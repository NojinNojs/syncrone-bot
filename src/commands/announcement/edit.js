const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const message = interaction.options.getString("message");
  const messageId = interaction.options.getString("id");
  const title = interaction.options.getString("title") || "📢・Announcement!"; // Default title
  const color = interaction.options.getString("color") || "#0099ff"; // Default color
  const footer = interaction.options.getString("footer") || "Announcement"; // Default footer

  const editMessage = await interaction.channel.messages.fetch(messageId);

  client.embed(
    {
      title: title,
      description: message,
      color: color,
      footer: footer,
      type: "edit",
    },
    editMessage
  );

  client.succNormal(
    {
      text: `Announcement has been edit successfully!`,
      type: "ephemeraledit",
    },
    interaction
  );
};
