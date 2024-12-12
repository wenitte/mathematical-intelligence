# 

Source: https://proofwiki.org/wiki/Bounded_Linear_Operator_on_Hilbert_Space_Direct_Sum

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\sequence {\family {\HH_i, \innerprod \cdot \cdot_i} }_{i \mathop \in I}$ be a $I$-indexed family of Hilbert spaces over $\GF$.
For each $i \in I$, let $T_i : \HH_i \to \HH_i$ be a bounded linear operator.
Suppose that:

$\ds \sup_{i \mathop \in I} \norm {T_i}_{\map B {\HH_i} } < \infty$
where $\norm {\, \cdot \,}_{\map B {\HH_i} }$ is the norm of a bounded linear operator on $\HH_i$.
Let:

$\ds \HH = \bigoplus_{i \mathop \in I} \HH_i$
be the Hilbert space direct sum of $\sequence {\family {\HH_i, \innerprod \cdot \cdot_i} }_{i \mathop \in I}$ with norm $\norm {\, \cdot \,}$.
Define $T : \HH \to \HH$ by:

$\map {\paren {T f} } i = \map {T_i} {\map f i}$
for each $f \in \HH$ and $i \in I$.

Then $T$ is a bounded linear operator.
Further, $\norm T_{\map B \HH} = M$.


Proof
We first verify that $T$ is well-defined.
Let:

$\ds M = \sup_{i \mathop \in I} \norm {T_i}_{\map B {\HH_i} }$
For this we want to verify that for each $f \in \HH$ we have:

$\ds \sum \set {\norm {\map {T_i} {\map f i} }_i^2 : i \in I} < \infty$
From Fundamental Property of Norm on Bounded Linear Transformation, we have:

$\norm {\map {T_i} {\map f i} }_i \le \norm {T_i}_{\map B {\HH_i} } \norm {\map f i}_i \le M \norm {\map f i}_i$
for each $f \in \HH$.
From the definition of $\HH$, we have:

$\ds \sum \set {\norm {\map f i}_i^2 : i \in I} < \infty$
Hence from Generalized Sum Preserves Inequality we have:

$\ds \sum \set {\norm {\map {T_i} {\map f i} }_i^2 : i \in I} < \infty$
as desired.
We have then just shown:














\(\ds \norm {T f}^2\)

\(=\)







\(\ds \sum \set {\norm {\map {\paren {T f} } i}^2 : i \in I}\)




















\(\ds \)

\(=\)







\(\ds \sum \set {\norm {\map {T_i} {\map f i} }^2 : i \in I}\)




















\(\ds \)

\(\le\)







\(\ds \sum \set {M^2 \norm {\map f i}^2 : i \in I}\)





Generalized Sum Preserves Inequality














\(\ds \)

\(=\)







\(\ds M^2 \sum \set {\norm {\map f i}^2 : i \in I}\)





Generalized Sum is Linear














\(\ds \)

\(=\)







\(\ds M^2 \norm f^2\)









Hence:

$\norm {T f} \le M \norm f$
We show that $T$ is linear.
Let $f, g \in \HH$ and $\lambda \in \GF$. 
We then have for each $i \in I$:














\(\ds \map {\paren {\map T {f + \lambda g} } } i\)

\(=\)







\(\ds \map {T_i} {\map {\paren {f + \lambda g} } i}\)




















\(\ds \)

\(=\)







\(\ds \map {T_i} {\map f i + \lambda \map g i}\)




















\(\ds \)

\(=\)







\(\ds \map {T_i} {\map f i} + \lambda \map {T_i} {\map g i}\)





$T_i$ is linear














\(\ds \)

\(=\)







\(\ds \map {\paren {T f} } i + \lambda \map {\paren {T g} } i\)









Hence:

$\map T {f + \lambda g} = T f + \lambda T g$
We finally determine the norm of $T$. 
We have already shown that:

$\norm {T f} \le M \norm f$ for each $f \in \HH$.
Hence:

$\norm T_{\map B \HH} \le M$
We now show that:

$\norm T_{\map B \HH} \ge M$
Let $0 < \epsilon < M$. 
By the definition of supremum, there exists $i \in I$ such that:

$\norm {T_i}_{\map \BB {H_i} } > M - \epsilon$
Then there exists $e_i \in \HH$ with $\norm {e_i}_i = 1$ such that:

$\norm {T_i e_i}_{\map \BB {H_i} } > M - \epsilon$
Define $f \in \HH$ by $\map f i = e_i$ and $\map f j = {\mathbf 0}_\HH$ for $j \ne i$. 
We have:














\(\ds \norm f^2\)

\(=\)







\(\ds \sum \set {\norm {\map f j}^2 : j \in I}\)




















\(\ds \)

\(=\)







\(\ds \norm {\map f i}_i^2\)




















\(\ds \)

\(=\)







\(\ds \norm {e_i}_i^2\)




















\(\ds \)

\(=\)







\(\ds 1\)









So $\norm f = 1$. 
Further $\map {\paren {T f} } i = T_i e_i$, while $\map {\paren {T f} } j = {\mathbf 0}_\HH$ for $j \ne i$. 
Hence we have:














\(\ds \norm {T f}^2\)

\(=\)







\(\ds \sum \set {\norm {\map {\paren {T f} } j}^2 : j \in I}\)




















\(\ds \)

\(=\)







\(\ds \norm {\map {\paren {T f} } i}_i^2\)




















\(\ds \)

\(>\)







\(\ds \paren {M - \epsilon}^2\)









Hence we have $\norm {T f} > M - \epsilon$.
So $\norm T_{\map B \HH} > M - \epsilon$ for each $0 < \epsilon < M$.
Hence $\norm T_{\map B \HH} \ge M$. 
So we conclude $\norm T_{\map B \HH} = M$.
$\blacksquare$





