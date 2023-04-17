export async function hideLevelRequest(server, accessToken, levelID) {
  const levelIdentifierParts = levelID.split(':')
  const identifierPath = levelIdentifierParts[0] + '/' + levelIdentifierParts[1]
  const response = await fetch(server + 'hide/' + identifierPath, {headers: {'Authorization': 'Bearer ' + accessToken}})
  const responseBody = await response.text();
  if(response.status != 200 && accessToken && responseBody === "Not authorized!")
  {
    confirm("Result: " + responseBody);
    //TODO: Log out user
    //logout();
    return false
  }

  return true
}