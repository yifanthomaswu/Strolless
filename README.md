6. Permissions:

We recommend the following simple rules for keeping permissions in
your group project directory sensible:

- All members of the group should set 'umask 002' before working in
  the group project directory.  This ensures that all new files/dirs
  are user-writable, group-writable and other-readable.  In fact, it
  is best for the duration of the project if each group member adds
  'umask 002' to the end of your ~/.cshrc file.

- Whenever you create a new subdirectory in the group directory, you
  should do "chmod g+ws NEW_DIR_NAME".  This will ensure that newly
  created files/dirs within that directory inherit the group ownership
  from the parent (i.e. be group-owned by the project group) rather
  than reverting to be group-owned by your primary group.  The latter
  default behaviour is often the main cause of CGI scripts failing
  with the dreaded "Internal server error" message.