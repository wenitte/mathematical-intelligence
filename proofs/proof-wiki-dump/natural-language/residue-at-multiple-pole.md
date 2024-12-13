# 

Source: https://proofwiki.org/wiki/Residue_at_Multiple_Pole

Theorem
Let $f: \C \to \C$ be a function meromorphic on some region, $D$, containing $a$. 
Let $f$ have a single pole in $D$, of order $N$, at $a$.
Then the residue of $f$ at $a$ is given by:

$\ds \Res f a = \frac 1 {\paren {N - 1}!} \lim_{z \mathop \to a} \frac {\d^{N - 1} } {\d z^{N - 1} } \paren {\paren {z - a}^N \map f z}$


Proof
By Existence of Laurent Series, there exists a Laurent series: 

$\ds \map f z = \sum_{n \mathop = -\infty}^\infty c_n \paren {z - a}^n$
convergent on $D \setminus \set a$. 
As $f$ has a pole of order $N$ at $a$, we have $c_n = 0$ for $n < -N$. 
So: 

$\ds \paren {z - a}^N \map f z = \sum_{n \mathop = -N}^\infty c_n \paren {z - a}^{n + N}$
Which can be rewritten: 

$\ds \paren {z - a}^N \map f z = \sum_{n \mathop = 0}^\infty c_{n - N} \paren {z - a}^n$
Note that this is a Taylor series with centre $a$. 
By the definition of a residue: 

$\ds \Res f a = c_{-1}$
This corresponds to the $\paren {N - 1}$th in the Taylor series of $\paren {z - a}^N \map f z$ about $a$. 
We therefore have by Taylor Series of Holomorphic Function: 

$\ds c_{-1} = \frac 1 {\paren {N - 1}!} \lim_{z \mathop \to a} \frac {\d^{N - 1} } {\d z^{N - 1} } \paren {\paren {z - a}^N \map f z}$
Hence the result. 
$\blacksquare$





