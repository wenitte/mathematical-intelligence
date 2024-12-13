# 

Source: https://proofwiki.org/wiki/Image_of_Interval_by_Derivative

Theorem
Let $f$ be a real function that is everywhere differentiable.
Let $I \subseteq \Dom f$ be a real interval.

Then:

$f' \sqbrk I$ is a real interval
where $f'$ denotes the derivative of $f$


Proof
Let $x_1, x_2 \in f' \sqbrk I: x_1 < x_2$.
Let $\xi \in \openint {x_1} {x_2}$.
We need to show that $\xi \in f' \sqbrk I$.

Let $a, b \in I : \map {f'} a = x_1 \land \map {f'} b = x_2$.
Without loss of generality, assume $a < b$. The case $b < a$ is handled similarly.

Let $\map g x = \map f x - \xi x$.
Then:

$\map {g'} x = \map {f'} x - \xi$
By Differentiable Function is Continuous, $g$ is continuous.
By Restriction of Continuous Mapping is Continuous, $g \restriction_{\closedint a b}$ is continuous.
From Corollary 3 to Continuous Image of Compact Space is Compact:

$g \restriction_{\closedint a b}$ attains a minimum.
By hypothesis, $\map {g'} a < 0$ and $\map {g'} b > 0$.
Let $\map {N^*_\epsilon} x$ denote the deleted $\epsilon$-neighborhood  of $x$.
Then from Behaviour of Function Near Limit:

$\exists \map {N^*_\epsilon} a: \forall x \in \map {N^*_\epsilon} a: \dfrac {\map g x - \map g a} {x - a} < 0$
and:

$\exists \map {N^*_\delta} b: \forall x \in \map {N^*_\delta} b: \dfrac {\map g x - \map g b} {x - b} > 0$
Thus:

$\exists x \in \map {N^*_\epsilon} a \cap \closedint a b: \map g x < \map g a$
and

$\exists x \in \map {N^*_\delta} b \cap \closedint a b: \map g x < \map g b$
Hence $\map g a$ and $\map g b$ are not minima of $g \restriction_{\closedint a b}$.
So $g \restriction_{\closedint a b}$ must attain its minimum at some $m \in \openint a b$.
By Derivative at Maximum or Minimum:

$\map {g'} m = 0$
Hence:

$\map {f'} m = \xi$
The result follows.
$\blacksquare$


Sources
2007: Robert B. Ash: Real Variables with Basic Metric Space Topology: $\S 5.2.1$




