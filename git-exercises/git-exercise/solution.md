# Git Tasks

1. Set vscode as config editor for git using following command : 
git config --global core.editor "code --wait"

"wait" used to wait for vscode to be closed before returning to console.

2. Created a "test commit". 
3. Inspected the object with `git cat-file -t <commit id>` and `git cat-file -p <commit-id>`, was able to see the content and type of commit.
4. Use `git ls-files -s` to view the content of your staging area - It listed all the files which was created after cloning.

# Git Exercises


1. Created a "test commit". 
2. Inspected the object with `git cat-file -t <commit id>` and `git cat-file -p <commit-id>`, was able to see the content and type of commit.
3. Use `git ls-files -s` to view the content of your staging area - It listed all the files which was created after cloning.

4. Use `git reset` to undo the staging of your file : Did git add and then did reset to revert back the changes to working area.

5. Stash your changes with a unique stash name, then unstash and apply them back : 

stashed the changes using "git stash push -m "name"", applied them back using "git stash apply stash@{index}"

6. Create a lightweight tag and confirm that its pointing to the right commit.

Tagged latest commit using : git tag -a annotated-tag-test-commit HEAD


7. Create an annotated tag, and use `git show` to see more information about it.

Displayed changes under specific tag using  "git show"

8. Merge 2 branches(ex. feature, and master) and look at the git logs.

We can merge feature to master using "git merge feature" after checking out to master.

9.  Make two conflicting changes to `sample.txt` in two different branches.


10. Use various options in git log to see the filtered history of repository.
11.  Try Following command to see how Git is creating SHA Keys and storing values
```shell
$ echo 'Hello, World!' | git hash-object --stdin
```
```shell
$ echo 'blob 14\0Hello, World!' | openssl sha1
```

1.  Try `git revert` to revert a commit.

