# 

Source: https://proofwiki.org/wiki/Horizontal_Section_of_Cartesian_Product

Theorem
Let $X$ and $Y$ be sets.
Let $A \subseteq X$ and $B \subseteq Y$, so that $A \times B \subseteq X \times Y$. 
Let $y \in Y$. 

Then: 

$\paren {A \times B}^y = \begin{cases}A & y \in B \\ \O & y \not \in B\end{cases}$
where $\paren {A \times B}^y$ is a horizontal section of $A \times B$.


Proof
Let $y \in B$. 
From the definition of the horizontal section, we have: 

$x \in \paren {A \times B}^y$
if and only if:

$\tuple {x, y} \in A \times B$
Since $y \in B$, this equivalent to: 

$x \in A$
So:

$x \in \paren {A \times B}^y$ if and only if $x \in A$
giving:

$\paren {A \times B}^y = A$ if $y \in B$.

Now let $y \in Y \setminus B$.
So, by the definition of set difference, we have $y \in Y$ and $y \not \in B$.
As before, we have:

$x \in \paren {A \times B}^y$
if and only if:

$\tuple {x, y} \in A \times B$
But this is equivalent to: 

$x \in A$ and $y \in B$.
Since $y \not \in B$, there exists no $x \in \paren {A \times B}^y$.
So:

$\paren {A \times B}^y = \O$ if $y \not \in B$.
$\blacksquare$





