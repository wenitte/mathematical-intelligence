# 

Source: https://proofwiki.org/wiki/Residue_at_Simple_Pole

Theorem
Let $f: \C \to \C$ be a function meromorphic on some region, $D$, containing $a$. 
Let $f$ have a simple pole at $a$. 
Then the residue of $f$ at $a$ is given by:

$\ds \Res f a = \lim_{z \mathop \to a} \paren {z - a} \map f z$


Proof
By Existence of Laurent Series, there exists a Laurent series:

$\ds \map f z = \sum_{n \mathop = -\infty}^\infty c_n \paren {z - a}^n$
which is convergent in $D \setminus \set a$, where $\sequence {c_n}$ is a doubly infinite sequence of complex coefficients. 
We are given that $f$ has only a simple pole at $a$.
Thus $c_n = 0$ for $n < -1$.
So we can write: 

$\ds \map f z = \sum_{n \mathop = 0}^\infty c_n \paren {z - a}^n + \frac {c_{-1} } {z - a}$
Then:














\(\ds \lim_{z \mathop \to a} \paren {z - a} \map f z\)

\(=\)







\(\ds \lim_{z \mathop \to a} \paren {z - a} \paren {\sum_{n \mathop = 0}^\infty c_n \paren {z - a}^n + \frac {c_{-1} } {z - a} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to a} \paren {\sum_{n \mathop = 0}^\infty c_n \paren {z - a}^{n + 1} + c_{-1} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty c_n \paren {a - a}^{n + 1} + c_{-1}\)




















\(\ds \)

\(=\)







\(\ds 0 \sum_{n \mathop = 0}^\infty c_n + c_{-1}\)




















\(\ds \)

\(=\)







\(\ds c_{-1}\)




















\(\ds \)

\(=\)







\(\ds \Res f a\)





Definition of Residue



$\blacksquare$





