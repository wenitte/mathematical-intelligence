# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_Operations_are_Continuous/Corollary

Theorem
Let $\struct {R, +, \times, \norm {\,\cdot\,} }$ be a normed division ring.
Let $d$ be the metric induced by the norm $\norm {\,\cdot\,}$.
Let $\tau$ be the topology induced by the metric $d$.

Then:

$\struct {R, \tau}$ is a topological division ring.


Proof
Let $d_\infty$ be the Chebyshev distance metric on $R \times R$.
Let $\tau^\times$ be the product topology on $R \times R$.
By $p$-Product Metric Induces Product Topology, $\tau^\times$ is the topology induced by the metric $d_\infty$.

Let $R^* = R \setminus \set 0$.
Let $d^*$ be the restriction of $d$ to $R^*$.
Let $\tau^*$ be the subspace topology on $R^*$.
By Metric Subspace Induces Subspace Topology then $\tau^*$ is the topology induced by the metric $d^*$

By Normed Division Ring Operations are Continuous and Continuous Mapping is Continuous on Induced Topological Spaces, the mappings:

$\phi : \struct {R \times R, \tau^\times} \to \struct {R, \tau} : \map \phi {x, y} = x + y$
$\theta : \struct {R ,\tau} \to \struct {R, \tau} : \map \theta x = -x$
$\psi : \struct {R \times R, \tau^\times} \to \struct {R, \tau} : \map \psi {x, y} = x y$
$\xi : \struct {R^* ,\tau^*} \to \struct {R, \tau} : \map \xi x = x^{-1}$
are continuous.

By the definition of a topological division ring then the result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.3$: Topology, Problem $43$




