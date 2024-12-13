# 

Source: https://proofwiki.org/wiki/Natural_Number_Addition_is_Cancellable/Proof_2



Theorem
Let $\N$ be the natural numbers.
Let $+$ be addition on $\N$.

Then:

$\forall a, b, c \in \N: a + c = b + c \implies a = b$
$\forall a, b, c \in \N: a + b = a + c \implies b = c$

That is, $+$ is cancellable on $\N$.


Proof
By Natural Number Addition is Commutative, we only need to prove the first statement.

Proof by induction.
Consider the natural numbers $\N$ defined in terms of Peano's Axioms.

From the definition of addition in Peano structure‎, we have that:










\(\ds \forall m, n \in \N: \, \)



\(\ds m + 0\)

\(=\)







\(\ds m\)




















\(\ds m + \map s n\)

\(=\)







\(\ds \map s {m + n}\)










For all $n \in \N$, let $\map P n$ be the proposition:

$\forall a, b \in \N: a + n = b + n \implies a = b$


Basis for the Induction
$\map P 0$ is the proposition:

$\forall a, b \in \N: a + 0 = b + 0 \implies a = b$
which holds because of the definition of $+$.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \in \N$, then it logically follows that $\map P {\map s k}$ is true.

So this is our induction hypothesis $\map P k$:

$\forall a, b \in \N: a + k = b + k \implies a = b$

Then we need to show that $\map P {\map s k}$ follows directly from $\map P k$:

$\forall a, b \in \N: a + \map s k = b + \map s k \implies a = b$


Induction Step
This is our induction step:















\(\ds a + \map s k\)

\(=\)







\(\ds b + \map s k\)














\(\ds \leadsto \ \ \)





\(\ds \map s {a + k}\)

\(=\)







\(\ds \map s {b + k}\)





Definition of $+$








\(\ds \leadsto \ \ \)





\(\ds a + k\)

\(=\)







\(\ds b + k\)





Peano's Axiom $\text P 3$: $s$ is injective








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b\)





Induction Hypothesis



So $\map P k \implies \map P {\map s k}$ and the result follows by the Principle of Mathematical Induction for Peano Structure.

Therefore:

$\forall a, b \in \N: a + n = b + n \implies a = b$
$\blacksquare$





