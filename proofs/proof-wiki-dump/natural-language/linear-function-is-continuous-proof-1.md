# 

Source: https://proofwiki.org/wiki/Linear_Function_is_Continuous/Proof_1

Theorem
Let $\alpha, \beta \in \R$ be real numbers.
Let $f : \R \to \R$ be a linear real function:

$\map f x = \alpha x + \beta$
for all $x \in \R$.

Then $f$ is continuous at every real number $c \in \R$.


Proof
First assume $\alpha \ne 0$.
Let $\epsilon \in \R_{>0}$.
Let $\delta = \dfrac \epsilon {\size \alpha}$.
Then, provided that $\size {x - c} < \delta$:














\(\ds \size {\map f x - \map f c}\)

\(=\)







\(\ds \size {\alpha \paren {x - c} }\)




















\(\ds \)

\(=\)







\(\ds \size {\alpha} \cdot \size {x - c}\)




















\(\ds \)

\(<\)







\(\ds \size {\alpha} \delta\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









So, we have found a $\delta$ for a given $\epsilon$ so as to make $\size {\map f x - \map f c} < \epsilon$ provided $\size {x - c} < \delta$.
So $\ds \lim_{x \mathop \to c} \map f x = \map f c$ and so $f$ is continuous at $c$, whatever $c$ happens to be.

Now suppose $\alpha = 0$.
Then $\forall x \in \R: \map f x - \map f c = 0$.
So whatever $\epsilon \in \R_{>0}$ we care to choose, $\size {\map f x - \map f c} < \epsilon$, and whatever $\delta$ may happen to be is irrelevant.
Continuity follows for all $c \in \R$, as above.
$\blacksquare$





