# 

Source: https://proofwiki.org/wiki/Ramanujan%27s_Arctangent_Sum



Theorem
Let $n > 0$ and $r \in \N$.
Then:

$\ds \sum_{k \mathop = 0}^{r - 1} \map \arctan {\dfrac 2 {\paren {n + 2 k + 1}^2} } = \map \arctan {\dfrac {2 r} {\paren {n^2 + 2 n r + 1} } }$


Corollary
$\ds \sum_{k \mathop = 0}^\infty \map \arctan {\dfrac 2 {\paren {n + 2 k + 1}^2} } = \map \arctan {\dfrac 1 n }$


Proof
Recall the Difference of Arctangents:
Let $\arctan a - \arctan b \in \openint {-\dfrac \pi 2} {\dfrac \pi 2}$ 
Then:

$\arctan a - \arctan b = \arctan \dfrac {a - b} {1 + a b}$
where $\arctan$ denotes the arctangent.

We first observe:














\(\ds \map \arctan {\frac 1 {\paren {n + 2 k} } } - \map \arctan {\frac 1 {\paren {n + 2 k + 2} } }\)

\(=\)







\(\ds \map \arctan {\dfrac {\dfrac 1 {\paren {n + 2 k } } - \dfrac 1 {\paren {n + 2 k + 2} } } {1 + \dfrac 1 {\paren {n + 2 k} \paren {n + 2 k + 2} } } }\)




















\(\ds \)

\(=\)







\(\ds \map \arctan {\dfrac 2 {\paren {n + 2 k} \paren {n + 2 k + 2} + 1} }\)




















\(\ds \)

\(=\)







\(\ds \map \arctan {\dfrac 2 {\paren {n + 2 k + 1}^2} }\)









We now sum both sides on $k$, from $0 \le k \le r - 1$. 
On the left hand side, we obtain:














\(\ds \sum_{k \mathop = 0}^{r - 1} \paren {\map \arctan {\frac 1 {\paren {n + 2 k} } } - \map \arctan {\frac 1 {\paren {n + 2 k + 2} } } }\)

\(=\)







\(\ds \map \arctan {\frac 1 n} - \map \arctan {\frac 1 {\paren {n + 2} } } + \map \arctan {\frac 1 {\paren {n + 2} } } - \map \arctan {\frac 1 {\paren {n + 4} } } + \cdots - \map \arctan {\frac 1 {\paren {n + 2 r} } }\)




















\(\ds \)

\(=\)







\(\ds \map \arctan {\frac 1 n} - \map \arctan {\frac 1 {\paren {n + 2 r} } }\)









Therefore:

$\ds \map \arctan {\frac 1 n} - \map \arctan {\frac 1 {\paren {n + 2 r} } } = \sum_{k \mathop = 0}^{r - 1} \map \arctan {\dfrac 2 {\paren {n + 2 k + 1}^2} } $
Finally:














\(\ds \sum_{k \mathop = 0}^{r - 1} \map \arctan {\dfrac 2 {\paren {n + 2 k + 1}^2} }\)

\(=\)







\(\ds \map \arctan {\frac 1 n } - \map \arctan {\frac 1 {\paren {n + 2 r} } }\)




















\(\ds \)

\(=\)







\(\ds \map \arctan {\dfrac {\dfrac 1 n - \dfrac 1 {\paren {n + 2 r} } } {1 + \dfrac 1 n \dfrac 1 {\paren {n + 2 r} } } }\)





Difference of Arctangents














\(\ds \)

\(=\)







\(\ds \map \arctan {\dfrac {2 r} {n \paren {n + 2 r} + 1} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \map \arctan {\dfrac {2 r} {\paren {n^2 + 2 n r + 1} } }\)





simplifying



$\blacksquare$


Source of Name
This entry was named for Srinivasa Ramanujan.


Examples
Example: $\ds \sum_{k \mathop = 1}^\infty \map \arctan {\dfrac 1 {2 \paren {n + k}^2} }$
$\ds \sum_{k \mathop = 1}^\infty \map \arctan {\dfrac 1 {2 \paren {n + k}^2} } = \map \arctan {\dfrac 1 {2 n + 1} } $


Example: $\ds \sum_{k \mathop = 1}^\infty \map \arctan {\dfrac 1 {2 k^2} }$













\(\ds \sum_{k \mathop = 1}^\infty \map \arctan {\dfrac 1 {2 k^2} }\)

\(=\)







\(\ds \map \arctan {\dfrac 1 2 } + \map \arctan {\dfrac 1 8 } + \map \arctan {\dfrac 1 {18} } + \map \arctan {\dfrac 1 {32} } + \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 4\)











Example: $\ds \sum_{k \mathop = 0}^\infty \map \arctan {\dfrac 2 {\paren {2 k + 1}^2} }$













\(\ds \sum_{k \mathop = 0}^\infty \map \arctan {\dfrac 2 {\paren {2 k + 1}^2} }\)

\(=\)







\(\ds \map \arctan 2 + \map \arctan {\dfrac 2 9} + \map \arctan {\dfrac 2 {25} } + \map \arctan {\dfrac 2 {49} } + \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2\)











Sources
1985: Bruce C. Berndt: Ramanujan's Notebooks: Part I: Chapter $\text {2}$. Sums Related to the Harmonic Series or the Inverse Tangent Function




