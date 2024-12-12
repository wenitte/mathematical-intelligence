# 

Source: https://proofwiki.org/wiki/Cardinality_of_Image_of_Injection



Theorem
Let $f: S \rightarrowtail T$ be an injection.
Let $A \subseteq S$ be a finite subset of $S$.

Then:

$\card {f \paren A} = \card A$
where $\card A$ denotes the cardinality of $A$.


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $P_n$ be the proposition:

$\card {f \paren A} = \card A$ when $\card A = n$

Suppose $\card A = 0$.














\(\ds \card A\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \O\)





Cardinality of Empty Set








\(\ds \leadsto \ \ \)





\(\ds f \paren A\)

\(=\)







\(\ds \O\)





Image of Empty Set is Empty Set








\(\ds \leadsto \ \ \)





\(\ds \card {f \paren A}\)

\(=\)







\(\ds 0\)





Cardinality of Empty Set



So $P_0$ holds.


Basis for the Induction
Suppose $\card A = 1$.
Then let $A = \set a$.
So:

$f \paren A = \set {f \paren a}$
and so:

$\card {f \paren A} = 1$
So $P_1$ is true.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $P_k$ is true, where $k \ge 1$, then it logically follows that $P_{k + 1}$ is true.

So this is our induction hypothesis:

$\card {f \paren A} = \card A$ when $\card A = k$

Then we need to show:

$\card {f \paren A} = \card A$ when $\card A = k + 1$


Induction Step
This is our induction step:

Consider $A$ where $\card A = k+1$.
Let $s \in A$ and consider $A' = A \setminus \set s$.
Let $f {\restriction_{A'} }$ be the restriction of $f$ to $A'$.
By Restriction of Injection is Injection we have that $f {\restriction_{A'} }$ is also an injection.
Then by the induction hypothesis:

$\card {f {\restriction_{A'} } \paren {A'} } = \card {A'}$
because $\card {A'} = k$.

Now consider $f \paren s$.
Suppose $f \paren s \in f {\restriction_{A'} } \paren {A'}$.
Then:

$\exists t \in A': f \paren t = f \paren s$
and so $f$ would not be an injection.

So:

$f \paren s \notin f {\restriction_{A'} } \paren {A'}$ and so:













\(\ds f \paren A\)

\(=\)







\(\ds f \paren {A' \cup \set s}\)




















\(\ds \)

\(=\)







\(\ds f \paren {A'} \cup f \paren {\set s}\)





Image of Union under Mapping








\(\ds \leadsto \ \ \)





\(\ds \card {f \paren A}\)

\(=\)







\(\ds \card {f \paren {A'} } + \card {f \paren {\set s} }\)





Cardinality of Set Union, as $f \paren {A'}$ and $f \paren {\set s}$ are disjoint














\(\ds \)

\(=\)







\(\ds k + 1\)










So $P_k \implies P_{k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 22.2$: Injections; bijections; inverse of a bijection




