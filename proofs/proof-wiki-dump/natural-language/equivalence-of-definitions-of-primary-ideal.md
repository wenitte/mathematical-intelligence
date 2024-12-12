# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Primary_Ideal



Theorem
Let $R$ be a commutative ring with unity.
The following definitions of the concept of Primary Ideal are equivalent:

Definition 1
A proper ideal $\mathfrak q$ of $R$ is called a primary ideal if and only if:

$\forall x,y \in R :$
$x y \in \mathfrak q \implies x \in \mathfrak q \; \lor \; \exists n \in \N_{>0} : y^n \in \mathfrak q$
Definition 2
A proper ideal $\mathfrak q$ of $R$ is called a primary ideal if and only if:

each zero-divisor of the quotient ring $R / \mathfrak q$ is nilpotent.


Proof
Definition 1 implies Definition 2
Let $x + \mathfrak q$ be a zero-divisor of $R / \mathfrak q$.
That is, there is a $y \not \in \mathfrak q$ such that:

$\paren {x + \mathfrak q} \paren {y + \mathfrak q} = 0 + \mathfrak q$
Thus:

$xy + \mathfrak q = 0 + \mathfrak q$
which means:

$xy \in \mathfrak q$
Then, by hypothesis:

$\exists n \in \N_{>0} : x^n \in \mathfrak q$
so that:

$\paren {x + \mathfrak q}^n = x^n + \mathfrak q = 0 + \mathfrak q$
Therefore $x + \mathfrak q$ is nilpotent.
$\Box$


Definition 2 implies Definition 1
Let $xy \in \mathfrak q$ but $x \not \in \mathfrak q$.
That is:

$\paren {x + \mathfrak q} \paren {y + \mathfrak q} = 0 + \mathfrak q$
Then, by hypothesis, $\paren {y + \mathfrak q}$ is nilpotent in $R \ \mathfrak q$.
Thus:











\(\ds \exists n \in \N_{>0}: \, \)



\(\ds \paren {y + \mathfrak q}^n\)

\(=\)







\(\ds y^n + \mathfrak q\)




















\(\ds \)

\(=\)







\(\ds 0 + \mathfrak q\)









so that:

$y^n \in \mathfrak q$
$\blacksquare$





