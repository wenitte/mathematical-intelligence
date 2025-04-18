# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Bounded_Real-Valued_Functions/Maximum_Rule


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a set.
Let $\R$ denote the real number line.
Let $f, g :S \to \R$ be bounded real-valued functions.
Let $f \vee g$ denote the pointwise maximum of $f$ and $g$, that is, $f \vee g$ is the mapping defined by:

$\forall s \in S : \map {\paren{f \vee g} } s = \max \set{\map f s, \map g s}$

Then:

$f \vee g$ is a bounded real-valued function


Proof
By definition of bounded real-valued function

$\exists M_f \in \R_{\ge 0} : \forall s \in S : \size{\map f s} \le M_f$
and

$\exists M_g \in \R_{\ge 0} : \forall s \in S : \size{\map g s} \le M_g$

From Negative of Absolute Value:

$\forall s \in S : \map f s \le \size{\map f s}$
and

$\forall s \in S : \map g s \le \size{\map g s}$

Let $M = \max \set{M_f, M_g}$.

We have:










\(\ds \forall s \in S: \, \)



\(\ds \bigsize{\map {\paren{f \vee g} } s}\)

\(=\)







\(\ds \bigsize{\max\set {\map f s, \map g s} }\)





Definition of Pointwise Maximum of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \bigsize{\max\set {\size{\map f s}, \size{\map g s} } }\)





Max Operation Preserves Total Ordering














\(\ds \)

\(\le\)







\(\ds \bigsize{\max\set {M_f, M_g} }\)





Max Operation Preserves Total Ordering














\(\ds \)

\(=\)







\(\ds \bigsize M\)





Definition of $M$














\(\ds \)

\(=\)







\(\ds M\)





as $M \ge 0$




It follows that $f \vee g$ is a bounded real-valued function by definition.
$\blacksquare$





