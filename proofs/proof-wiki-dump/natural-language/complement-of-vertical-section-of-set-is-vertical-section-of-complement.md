# 

Source: https://proofwiki.org/wiki/Complement_of_Vertical_Section_of_Set_is_Vertical_Section_of_Complement

Theorem
Let $X$ and $Y$ be sets.
Let $E \subseteq X \times Y$. 
Let $x \in X$. 

Then: 

$\paren {\paren {X \times Y} \setminus E}_x = Y \setminus E_x$
where:

$\paren {\paren {X \times Y} \setminus E}_x$ is the $x$-vertical section of the set difference $\paren {X \times Y} \setminus E$
$E_x$ is the $x$-vertical section of $E$.


Proof
Note that from the definition of set difference, we have that: 

$y \in Y \setminus E_x$
if and only if: 

$y \in Y$ and $y \not \in E_x$.
That is, from the definition of the $x$-vertical section: 

$y \in Y$ and $\tuple {x, y} \not \in E$.
This is equivalent to:

$\tuple {x, y} \in \paren {X \times Y} \setminus E$
From the definition of the $x$-vertical section, this is then equivalent to: 

$y \in \paren {\paren {X \times Y} \setminus E}_x$
So we have:

$y \in Y \setminus E_x$ if and only if $y \in \paren {\paren {X \times Y} \setminus E}_x$.
So:

$\paren {\paren {X \times Y} \setminus E}_x = Y \setminus E_x$
$\blacksquare$





