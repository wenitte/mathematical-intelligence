# 

Source: https://proofwiki.org/wiki/Natural_Numbers_form_Inductive_Set/Proof_1

Theorem
Let $\N$ denote the natural numbers as subset of the real numbers $\R$.

Then $\N$ is an inductive set.


Proof
By definition of the natural numbers:

$\N = \ds \bigcap \II$
where $\II$ is the collection of all inductive sets.

Suppose that $n \in \N$.
Then by definition of intersection:

$\forall I \in \II: n \in I$
Because all these $I$ are inductive:

$\forall I \in \II: n + 1 \in I$
Again by definition of intersection:

$n + 1 \in \N$
$\blacksquare$





