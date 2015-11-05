<?php

// Clone fresh repo from github using desired local repo name and checkout the desired branch
echo shell_exec("cd {$LOCAL_ROOT} && git pull && nodejs bin/www");

die("done " . mktime());
