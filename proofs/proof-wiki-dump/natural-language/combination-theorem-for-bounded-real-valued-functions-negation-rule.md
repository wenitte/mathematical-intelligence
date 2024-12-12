# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Bounded_Real-Valued_Functions/Negation_Rule


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a set.
Let $\R$ denote the real number line.
Let $f :S \to \R$ be bounded real-valued function.
Let $-f : S \to \R$ denote the pointwise negation of $f$, that is,  $-f$ denotes the mapping defined by:

$\forall s \in S : \map {\paren{-f} } s = - \map f s$

Then:

$-f$ is a bounded real-valued function


Proof
By definition of bounded real-valued function

$\exists M \in \R_{\ge 0} : \forall s \in S : \size{\map f s} \le M$

We have:










\(\ds \forall s \in S: \, \)



\(\ds \size{\map {\paren{-f} } s}\)

\(=\)







\(\ds \size{-\map f s}\)





Definition of Absolute Value of Real-Valued Function














\(\ds \)

\(=\)







\(\ds \size{\map f s}\)





Absolute Value of Negative














\(\ds \)

\(\le\)







\(\ds M\)





Definition of Bounded Real-Valued Function




It follows that $-f$ is a bounded real-valued function by definition.
$\blacksquare$





