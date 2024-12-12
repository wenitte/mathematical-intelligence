# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Extreme_Point_of_Convex_Set



Theorem
The following definitions of the concept of Extreme Point of Convex Set are equivalent:
Let $X$ be a vector space over $\R$. 
Let $K$ be a convex subset of $X$. 

Definition 1
We say that $a$ is an extreme point of $K$ if and only if:

whenever $a = t x + \paren {1 - t} y$ for $t \in \openint 0 1$, we have $x = y = a$.
Definition 2
We say that $a$ is an extreme point of $K$ if and only if:

$K \setminus \set a$ is convex.


Proof
Definition 1 implies Definition 2
Suppose that: 

whenever $a = t x + \paren {1 - t} y$ for $t \in \openint 0 1$, we have $x = y = a$.
Then, if $x, y \in K \setminus \set a$ and $t \in \openint 0 1$, we have: 

$t x + \paren {1 - t} y \ne a$
If $t = 0$, then we have: 

$t x + \paren {1 - t} y = y \ne a$
and if $t = 1$ we have: 

$t x + \paren {1 - t} y = x \ne a$
So if $x, y \in K \setminus \set a$ and $t \in \closedint 0 1$ we have:

$t x + \paren {1 - t} y \ne a$
Since $K$ is convex, we have: 

$t x + \paren {1 - t} y \in K$
so we have: 

$t x + \paren {1 - t} y \in K \setminus \set a$
so:

$K \setminus \set a$ is convex.
$\Box$ 


Definition 2 implies Definition 1
Suppose:

$K \setminus \set a$ is convex.
Then for all $x, y \in K \setminus \set a$ and $t \in \closedint 0 1$ we have: 

$t x + \paren {1 - t} y \in K \setminus \set a$
In particular, if $t \in \openint 0 1$ and $x, y \in K \setminus \set a$, we have: 

$t x + \paren {1 - t} y \ne a$
We also have that: 

$t a + \paren {1 - t} a = a$
Hence, if $x, y \in K$ and $t \in \openint 0 1$ have: 

$t x + \paren {1 - t} y = a$
then: 

$x = y = a$
$\blacksquare$





