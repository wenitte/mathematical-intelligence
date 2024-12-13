# 

Source: https://proofwiki.org/wiki/Power_of_Ring_Negative

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $n \in \N_{>0}$ be a strictly positive integer.
Let $x \in R$.

Then:

If $n$ is even:
$\map {\circ^n} {-x} = \map {\circ^n} x$
If $n$ is odd:
$\map {\circ^n} {-x} = -\map {\circ^n} x$


Proof
First, suppose that $n$ is even.
Then for some $m \in \N_{>0}$:

$n = 2 m = m + m$
Thus since $\circ$ is associative:

$\ds \map {\circ^n} {-x} = \prod_{i \mathop = 1}^m \paren {-x} \circ \paren {-x}$
By Product of Ring Negatives:

$\paren {-x} \circ \paren {-x} = x \circ x = \map {\circ^2} x$
Thus:

$\ds \map {\circ^n} {-x} = \prod_{i \mathop = 1}^m \map {\circ^2} x$
By associativity:

$\map {\circ^n} {-x} = \map {\circ^{2 m} } x = \map {\circ^n} x$
$\Box$

Now suppose instead that $n$ is odd.
If $n = 1$, then:

$\map {\circ^n} {-x} = -x = -\map {\circ^n} x$
Otherwise:














\(\ds \map {\circ^n} {-x}\)

\(=\)







\(\ds \paren {-x} \circ \paren {\map {\circ^{n - 1} } {-x} }\)




















\(\ds \)

\(=\)







\(\ds \paren {-x} \circ \paren {\map {\circ^{n - 1} } x}\)





$n-1$ is a strictly positive even integer, so the above case applies














\(\ds \)

\(=\)







\(\ds -\paren {x \circ \paren {\map {\circ^{n - 1} } x} }\)





Product with Ring Negative














\(\ds \)

\(=\)







\(\ds -\map {\circ^n} x\)





Definition of $\map {\circ^n} x$



$\blacksquare$





