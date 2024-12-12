# 

Source: https://proofwiki.org/wiki/Complement_of_Horizontal_Section_of_Set_is_Horizontal_Section_of_Complement

Theorem
Let $X$ and $Y$ be sets.
Let $E \subseteq X \times Y$. 
Let $y \in Y$. 

Then: 

$\paren {\paren {X \times Y} \setminus E}^y = X \setminus E^y$
where:

$\paren {\paren {X \times Y} \setminus E}^y$ is the $y$-horizontal section of the set difference $\paren {X \times Y} \setminus E$
$E^y$ is the $y$-horizontal section of $E$.


Proof
Note that from the definition of set difference, we have that: 

$x \in X \setminus E^y$
if and only if: 

$x \in X$ and $x \not \in E^y$.
That is, from the definition of the $y$-horizontal section: 

$x \in X$ and $\tuple {x, y} \not \in E$.
This is equivalent to: 

$\tuple {x, y} \in \paren {X \times Y} \setminus E$
From the definition of the $y$-horizontal section, this is then equivalent to: 

$x \in \paren {\paren {X \times Y} \setminus E}^y$
So we have:

$x \in X \setminus E^y$ if and only if $x \in \paren {\paren {X \times Y} \setminus E}^y$.
So:

$\paren {\paren {X \times Y} \setminus E}^y = X \setminus E^y$
$\blacksquare$





