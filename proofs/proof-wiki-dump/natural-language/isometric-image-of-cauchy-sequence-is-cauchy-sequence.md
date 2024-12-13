# 

Source: https://proofwiki.org/wiki/Isometric_Image_of_Cauchy_Sequence_is_Cauchy_Sequence

Theorem
Let $\struct {S_1, d_1}$ and $\struct {S_2, d_2}$ be metric spaces.
Let $f: S_1 \to S_2$ be an isometry.
Let $\sequence {x_n}$ be a Cauchy sequence in $S_1$.
Let $\sequence {y_n} = \sequence {\map f {x_n} }$ be the image of $\sequence {x_n}$ under $f$.

Then $\sequence {y_n}$ is a Cauchy sequence.


Proof
Let $\epsilon \in \R_{>0}$.
By the definition of Cauchy sequence, there is an $N \in \R$ such that:

$\paren{m > N} \land \paren {n > N} \implies \map {d_1} {x_m, x_n} < \epsilon$
Since $f$ is an isometry, $\map {d_2} {y_m , y_n} = \map {d_1} {x_m, x_n}$ for all $m$ and $n$.
Thus:

$\paren {m > N} \land \paren {n > N} \implies \map {d_2} {y_m, y_n} < \epsilon$
Hence $\sequence {y_n}$ is a Cauchy sequence.
$\blacksquare$





