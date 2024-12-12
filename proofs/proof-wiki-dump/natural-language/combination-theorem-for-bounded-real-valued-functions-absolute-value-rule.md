# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Bounded_Real-Valued_Functions/Absolute_Value_Rule

Theorem
Let $S$ be a set.
Let $\R$ denote the real number line.
Let $f :S \to \R$ be a bounded real-valued function.
Let $\size f : S \to \R$ denote  the absolute value of $f$, that is, $\size f$ denotes the mapping defined by:

$\forall s \in S : \map {\size f} s = \size{\map f s}$
 
Then:

$\size f$ is a bounded real-valued function


Proof
By definition of bounded real-valued function

$\exists M \in \R_{\ge 0} : \forall s \in S : \size{\map f s} \le M$

We have:










\(\ds \forall s \in S: \, \)



\(\ds \bigsize{\map {\size f} s}\)

\(=\)







\(\ds \bigsize{\size{\map f s} }\)





Definition of $\size f$














\(\ds \)

\(=\)







\(\ds \size{\map f s}\)





Definition of Absolute Value














\(\ds \)

\(\le\)







\(\ds M\)





Definition of Bounded Real-Valued Function




It follows that $\size f$ is a bounded real-valued function by definition.
$\blacksquare$





