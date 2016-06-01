<?php

$conn = pg_connect("host=db.doc.ic.ac.uk dbname=g1527136_u user=g1527136_u password=ikfbsbFTEN port=5432", PGSQL_CONNECT_ASYNC);
if (!$conn) {
  echo "An error occurred during connection.\n";
  exit;
}

$result = pg_query($conn, "SELECT pw FROM login_data WHERE email="+$_GET["Email"]);
if (!$result) {
  echo "An error occurred during query.\n";
  exit;
}

while ($row = pg_fetch_row($result)) {
  if ($row[0] == $_GET["Password"]) {
    echo "Pass";
  } else {
    echo "Wrong Password";
  }
}

?>
