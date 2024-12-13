# 

Source: https://proofwiki.org/wiki/Real_Line_Continuity_by_Inverse_of_Mapping



Theorem
Let $f$ be a real function.
Let the domain of $f$ be open.
Let $f^{-1}$ be the inverse of $f$.

Then $f$ is continuous if and only if:

for every open real set $O$ that overlaps with the image of $f$, the preimage $f^{-1} \sqbrk O$ is open.


Proof
Necessary Condition
Let $\Dom f$ be the domain of $f$.
Let $\Img f$ be the image of $f$.
Let $f^{-1} \sqbrk O$ be the preimage of $O$ under $f$.

Thus by definition:

$\Img f$ is the set of points $q$ in the codomain of $f$ satisfying $q = \map f p$ for a point $p$ in $\Dom f$.
$f^{-1} \sqbrk O$ is the set of points $p$ in $\Dom f$ such that $\map f p \in O$.

Let $f$ be continuous.
Let $O$ be an open real set that overlaps with $\Img f$.
We need to show that $f^{-1} \sqbrk O$ is open.

$(1): \quad$ It is shown that $f^{-1} \sqbrk O$ is non-empty.

A point $q_1$ exists in $O \cap \Img f$ as $O$ and $\Img f$ overlap.
In particular, $q_1 \in \Img f$.
Therefore, by definition of $\Img f$, a point $p_1$ in $\Dom f$ exists satisfying $\map f {p_1} = q_1$.
Also, $q_1 \in O$, which gives:














\(\ds q_1\)

\(\in\)







\(\ds O\)














\(\ds \leadsto \ \ \)





\(\ds \map f {p_1}\)

\(\in\)







\(\ds O\)





as $\map f {p_1} = q_1$








\(\ds \leadsto \ \ \)





\(\ds p_1\)

\(\in\)







\(\ds f^{-1} \sqbrk O\)





Definition of Preimage of Subset under Mapping



Accordingly, $f^{-1} \sqbrk O$ is non-empty.

$(2): \quad$ It is shown that the function $f$ maps $\openint {x - \delta} {x + \delta}$ into $O$.

Let $x$ be a point in $f^{-1} \sqbrk O$.
This means that $x \in \Dom f$ and $\map f x \in O$.

We know that $f$ is continuous.
Accordingly, $f$ is continuous at $x$ as $x \in \Dom f$.

Let an $\epsilon > 0$ be given.
That $f$ is continuous at $x$, means that:

a $\delta > 0$ exists such that $\map f y \in \openint {\map f x - \epsilon} {\map f x + \epsilon}$ whenever $y \in \openint {x - \delta} {x + \delta} \cap \Dom f$.

We know that $\map f x \in O$.
Also, $O$ is open.
This allows us to choose $\epsilon \in \R_{>0}$ small enough such that:

$\openint {\map f x - \epsilon} {\map f x + \epsilon} \subseteq O$

We know that $x \in \Dom f$.
Also, $\Dom f$ is open.
This allows us to choose $\delta \in \R_{>0}$ small enough such that:

$\openint {x - \delta} {x + \delta} \subseteq \Dom f$

Having chosen $\epsilon$ and $\delta$ in this way, we have, where $f \sqbrk {\openint {x - \delta} {x + \delta} }$ is the image of $\openint {x - \delta} {x + \delta}$ by $f$:

$f \sqbrk {\openint {x - \delta} {x + \delta} } \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$ as $\map f y \in \openint {\map f x - \epsilon} {\map f x + \epsilon}$ whenever $y \in \openint {x - \delta} {x + \delta}$
which implies:

$f \sqbrk {\openint {x - \delta} {x + \delta} } \subseteq O$ as $\openint {\map f x - \epsilon} {\map f x + \epsilon} \subseteq O$.

$(3): \quad$ It is shown that the interval $\openint {x - \delta} {x + \delta}$ is a subset of $f^{-1} \sqbrk O$.

Keep in mind that by Subset of Domain is Subset of Preimage of Image:

$\openint {x - \delta} {x + \delta} \subseteq f^{-1} \sqbrk {f \sqbrk {\openint {x - \delta} {x + \delta} } } $
Continuing by elaborating on $f \sqbrk {\openint {x - \delta} {x + \delta} } \subseteq O$:














\(\ds f \sqbrk {\openint {x - \delta} {x + \delta} }\)

\(\subseteq\)







\(\ds O\)














\(\ds \leadsto \ \ \)





\(\ds f^{-1} \sqbrk {f \sqbrk {\openint {x - \delta} {x + \delta} } }\)

\(\subseteq\)







\(\ds f^{-1} \sqbrk O\)





Image of Subset is Subset of Image








\(\ds \leadsto \ \ \)





\(\ds \openint {x - \delta} {x + \delta}\)

\(\subseteq\)







\(\ds f^{-1} \sqbrk O\)





as $\openint {x - \delta} {x + \delta} \subseteq f^{-1} \sqbrk {f \sqbrk {\openint {x - \delta} {x + \delta} } }$



Because:

$f \sqbrk {\openint {x - \delta} {x + \delta} } \subseteq O$
it follows that:

$\openint {x - \delta} {x + \delta} \subseteq f^{-1} \sqbrk O$
Since $x$ is an arbitrary point in $f^{-1} \sqbrk O$, it follows by definition of open set that $f^{-1} \sqbrk O$ is open.
$\Box$


Sufficient Condition
Let $\Dom f$ be the domain of $f$.
Let $\Img f$ be the image of $f$.
Let $f^{-1} \sqbrk O$ be the preimage of $O$ under $f$.

Thus by definition:

$\Img f$ is the set of points $q$ in the codomain of $f$ satisfying $q = \map f p$ for a point $p$ in $\Dom f$.
$f^{-1} \sqbrk O$ is the set of points $p$ in $\Dom f$ such that $\map f p \in O$.

Let $f^{-1} \sqbrk O$ be open for every open real set $O$ that overlaps with $\Img f$.
We need to show that $f$ is continuous.

Let $O$ be an open real set that overlaps with $\Img f$.

$(1): \quad$ It is shown that $\Dom f$ is non-empty.

A point $q_1$ exists in $O \cap \Img f$ as $O$ and $\Img f$ overlap.
In particular, $q_1 \in \Img f$.
Therefore, by definition of $\Img f$, a point $p_1$ in $\Dom f$ exists satisfying $q_1 = \map f {p_1}$.
Accordingly, $\Dom f$ is non-empty.

$(2): \quad$ It is shown that the set $f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} }$ is open.

Let $x$ be a point in $\Dom f$.
Let $\epsilon \in \R_{>0}$ be given.

The open interval $\openint {\map f x - \epsilon} {\map f x + \epsilon}$ overlaps with $\Img f$ as $\map f x \in \Img f$.
In other words, $\openint {\map f x - \epsilon} {\map f x + \epsilon}$ is an open real set that overlaps with $\Img f$.
Accordingly, $f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} }$ is open by assumption.

$(3): \quad$ It is shown that the interval $\openint {x - \delta} {x + \delta}$ is a subset of $f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} }$.

By definition of preimage of $\openint {\map f x - \epsilon} {\map f x + \epsilon}$ under $f$:

$x \in f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} }$
as:

$x \in \Dom f$ and $\map f x \in \openint {\map f x - \epsilon} {\map f x + \epsilon}$

Since $f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} }$ is open, a $\delta \in \R_{>0}$ exists such that:

$\openint {x - \delta} {x + \delta} \subseteq f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} }$
which implies:

$\openint {x - \delta} {x + \delta} \subseteq \Dom f$ as $f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} } \subseteq \Dom f$ by definition of $f^{-1}$

$(4): \quad$ It is shown that the set $f \sqbrk {\openint {x - \delta} {x + \delta} }$ is a subset of $\openint {\map f x - \epsilon} {\map f x + \epsilon}$.

Keep in mind that because:

$\openint {x - \delta} {x + \delta} \subseteq \Dom f$
it follows that:

$f \sqbrk {\openint {x - \delta} {x + \delta} }$ is defined.
Because:

$f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} } \subseteq \Dom f$
it follows that:

$f \sqbrk {f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} } }$ is defined.
By Subset of Codomain is Superset of Image of Preimage:

$f \sqbrk {f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} } } \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$

We continue by elaborating on $\openint {x - \delta} {x + \delta} \subseteq f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} }$:














\(\ds \openint {x - \delta} {x + \delta}\)

\(\subseteq\)







\(\ds f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} }\)














\(\ds \leadsto \ \ \)





\(\ds f \sqbrk {\openint {x - \delta} {x + \delta} }\)

\(\subseteq\)







\(\ds f \sqbrk {f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} } }\)





Image of Subset is Subset of Image








\(\ds \leadsto \ \ \)





\(\ds f \sqbrk {\openint {x - \delta} {x + \delta} }\)

\(\subseteq\)







\(\ds \openint {\map f x - \epsilon} {\map f x + \epsilon}\)





as $f \sqbrk {f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} } } \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$



Because:

$\openint {x - \delta} {x + \delta} \subseteq f^{-1} \sqbrk {\openint {\map f x - \epsilon} {\map f x + \epsilon} }$
it follows that:

$f \sqbrk {\openint {x - \delta} {x + \delta} } \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$
In other words, a point in $f \sqbrk {\openint {x - \delta} {x + \delta} }$ is also a point in $\openint {\map f x - \epsilon} {\map f x + \epsilon}$.

Accordingly, let $y \in \openint {x - \delta} {x + \delta}$.
Because:

$\map f y \in f \sqbrk {\openint {x - \delta} {x + \delta} }$
it follows that:

$\map f y \in \openint {\map f x - \epsilon} {\map f x + \epsilon}$
Therefore, by definition of continuity, $f$ is continuous at $x$.
Since $x$ is an arbitrary point in the domain of $f$, $f$ is continuous.
$\blacksquare$


Also see
Metric Space Continuity by Inverse of Mapping between Open Balls


Sources
1988: H.L. Royden: Real Analysis (3rd ed.): Ch. $2$: Section $6$, proposition $18$




