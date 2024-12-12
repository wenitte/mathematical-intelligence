# 

Source: https://proofwiki.org/wiki/Exhausting_Sequence_of_Sets_on_the_Strictly_Positive_Real_Numbers



Theorem
For each $k \in \N$, let $S_k = \openint {\dfrac 1 k} k$.

Then $\sequence {S_k}_k$ is an exhausting sequence of sets on $\R_{>0}$. 


Proof
To prove that $\sequence {S_k}_k$ is exhausting $\R_{>0}$, it is sufficient to show:

$(1): \quad \forall k \in \N: S_k \subseteq S_{k + 1}$
$(2): \quad \ds \bigcup_{k \mathop \in \N} S_k = \R_{>0}$


$\sequence {S_k}_k$ is increasing
Let $k \in \N$.

Let $k = 1$.
Then:

$S_k = \openint {\dfrac 1 k} k = \O$
Thus, by Empty Set is Subset of All Sets:

$\openint {\dfrac 1 k} k \subseteq \openint {\dfrac 1 {k + 1} } {k + 1}$

If $k \ge 2$:














\(\ds \)

\(\)

\(\, \ds x \, \)

\(\, \ds \in \, \)



\(\ds S_k\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 k\)

\(<\)

\(\, \ds x \, \)

\(\, \ds < \, \)



\(\ds k\)





Definition of Open Real Interval








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {k + 1}\)

\(<\)

\(\, \ds x \, \)

\(\, \ds < \, \)



\(\ds k\)





Ordering of Reciprocals








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {k + 1}\)

\(<\)

\(\, \ds x \, \)

\(\, \ds < \, \)



\(\ds k + 1\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)

\(\, \ds x \, \)

\(\, \ds \in \, \)



\(\ds S_{k + 1}\)





Definition of Open Real Interval




It follows that $\sequence {S_k}_k$ is increasing.
$\Box$


$\ds \bigcup_{k \mathop \in \N} S_k = \R_{>0}$
Let $x \in \R_{>0}$.


Case 1: $1 < x$
Let $1 < x$.
Let $k = \ceiling x$.

From Real Number is between Ceiling Functions:

$x < k$
From Ordering of Reciprocals:

$1 < k \implies \dfrac 1 k < 1$
So:

$\dfrac 1 k < x < k$
and so $x \in S_k$.


Case 2: $x = 1$
Let $x = 1$.
Let $k = 2$.
Then:

$\dfrac 1 2 < 1 < 2$
and hence $x \in S_2$.


Case 3: $0 < x < 1$
Let $0 < x < 1$.
Let $k = \ceiling {\dfrac 1 x}$.

From Ordering of Reciprocals:

$0 < x < 1 \implies 1 < \dfrac 1 x$
From Real Number is between Ceiling Functions:

$1 < \dfrac 1 x < k$
From Ordering of Reciprocals:

$\dfrac 1 k < x < 1$

So:

$\dfrac 1 k < x < k$
and so $x \in S_k$.

Hence:

$\forall x \in \R_{>0} : \exists k \in \N : x \in S_k$
$\Box$

The result follows from the definition of exhausting sequence of sets.
$\blacksquare$





