# 

Source: https://proofwiki.org/wiki/Composition_of_Repeated_Compositions_of_Injections



Theorem
Let $S$ be a set.
Let $f: S \to S$ be an injection.
Let the sequence of mappings:

$f^0, f^1, f^2, \ldots, f^n, \ldots$
be defined as:

$\forall n \in \N: f^n \left({x}\right) = \begin{cases}
x & : n = 0 \\
f \left({x}\right) & : n = 1 \\
f \left({f^{n-1} \left({x}\right)}\right) & : n > 1
\end{cases}$
Then:

$\forall m, n \in \Z_{\ge 0}: f^n \circ f^m = f^{m + n}$
where $f^n \circ f^m$ denotes composition of mappings.


Proof
Proof by induction:
Let $m \in \Z_{\ge 0}$ be given.
For all $n \in \Z_{\ge 0}$, let $P \left({n}\right)$ be the proposition:

$f^n \circ f^m = f^{m + n}$

$P \left({0}\right)$ is true, as this is the case:














\(\ds f^0 \circ f^m\)

\(=\)







\(\ds I_S \circ f^m\)





where $I_S$ is the identity mapping














\(\ds \)

\(=\)







\(\ds f^m\)





Identity Mapping is Left Identity





Basis for the Induction
$P \left({1}\right)$ is true, as this is the case:

$f^{m+1} \left({x}\right) = f \left({f^m \left({x}\right)}\right)$
by definition.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $P \left({k}\right)$ is true, where $k \ge 2$, then it logically follows that $P \left({k+1}\right)$ is true.

So this is our induction hypothesis:

$f^k \circ f^m = f^{m + k}$

Then we need to show:

$f^{k+1} \circ f^m = f^{m + k + 1}$


Induction Step
This is our induction step:














\(\ds \left({f^{k+1} \circ f^m}\right) \left({x}\right)\)

\(=\)







\(\ds \left({f \left({f^k}\right) \circ f^m}\right) \left({x}\right)\)





Definition of $f^{k+1}$














\(\ds \)

\(=\)







\(\ds \left({\left({f \circ f^k}\right) \circ f^m}\right) \left({x}\right)\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \left({f \circ \left({f^k \circ f^m}\right)}\right) \left({x}\right)\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds \left({f \circ f^{m+k} }\right) \left({x}\right)\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds f^{m+k+1} \left({x}\right)\)





Basis for the Induction



So $P \left({k}\right) \implies P \left({k+1}\right)$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m, n \in \Z_{\ge 0}: f^n \circ f^m = f^{m + n}$
$\blacksquare$





