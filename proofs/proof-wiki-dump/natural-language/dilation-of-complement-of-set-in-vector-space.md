# 

Source: https://proofwiki.org/wiki/Dilation_of_Complement_of_Set_in_Vector_Space

Theorem
Let $K$ be a field.
Let $X$ be a vector space over $K$.
Let $F \subseteq X$ be a non-empty set.
Let $\lambda \in K$.

Then:

$X \setminus \paren {\lambda F} = \lambda \paren {X \setminus F}$


Proof
It is immediate from the definition of a dilation that if $x \in F$ we have $\lambda x \in \lambda F$. 
Conversely, if $\lambda x \in \lambda F$, we have $\lambda x = \lambda y$ for some $y \in F$.
That is, $\lambda \paren {x - y} = 0$. 
Since $\lambda \ne 0$, it follows that $x = y$, and so $x \in F$.
So we have $x \in F$ if and only if $\lambda x \in \lambda F$.
So for $x \in X$ we have $x \not \in F$ if and only if $\lambda x \not \in \lambda F$. 
That is, $x \in X \setminus F$ if and only if $\lambda x \in X \setminus \paren {\lambda F}$.
It follows that $\lambda x \in \lambda \paren {X \setminus F}$ if and only if $\lambda x \in X \setminus \paren {\lambda F}$.
We can therefore conclude:

$X \setminus \paren {\lambda F} = \lambda \paren {X \setminus F}$
$\blacksquare$





