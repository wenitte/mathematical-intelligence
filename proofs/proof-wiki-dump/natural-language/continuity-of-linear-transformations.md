# 

Source: https://proofwiki.org/wiki/Continuity_of_Linear_Transformations

Theorem
Let $H, K$ be Hilbert spaces, and let $A: H \to K$ be a linear transformation.

Then the following four statements are equivalent:

$(1): \quad A$ is continuous
$(2): \quad A$ is continuous at $\mathbf 0_H$
$(3): \quad A$ is continuous at some point
$(4): \quad \exists c > 0: \forall h \in H: \norm {\map A h}_K \le c \norm h_H$


Proof
It is clear that $(1) \implies (2) \implies (3)$ and for $(4) \implies (2)$:
For any $\epsilon > 0$, there exists $\delta = \dfrac \epsilon c$, such that when $\norm {\mathbf 0_H - h}_H < \delta$:

$\norm {\map A h - \map A {\mathbf 0_H} }_K \le c \norm h_H < c\delta = \epsilon$

Now we prove $(3) \implies (1)$:
Let $A$ be continuous at some point $h_0$.
For any sequence $h_n \to h$ in $H$:

$h_n - h + h_0 \to h_0$
Hence:

$\ds \lim_{n \mathop \to \infty} \map A {h_n - h + h_0} = \lim_{n \mathop \to \infty} \map A {h_n} - \map A h + \map A {h_0} = \map A {h_0}$
We see that:

$\ds \lim_{n \mathop \to \infty} \map A {h_n} = \map A h$
Thus $A$ is continuous.

Now for the proof $(2) \implies (4)$.
We have that $A$ is continuous at $\mathbf 0_H$.
Hence there exists an open ball of positive real radius $a$, centered at $\mathbf 0_H$, such that its image under $A$ is included in the open ball of radius $1$, centered at $\mathbf 0_K$. 
This is, if $\norm h_H < a$, then:

$\norm {\map A h}_K < 1$
Let $h$ be an arbitrary element in $H$.
Let $\epsilon > 0$.
We have:

$\norm {\dfrac a {\norm h_H + \epsilon} h}_H < a$
Hence:

$\norm {\map A {\dfrac a {\norm h_H + \epsilon} h} }_K = \dfrac a {\norm h_H + \epsilon} \norm {\map A h}_K < 1$
Therefore:

$\norm {\map A h}_K < \dfrac 1 a \norm h_H + \dfrac \epsilon a$
Let $\epsilon \to 0$.
Therefore, we can take:

$c := \dfrac 1 a$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.1.1$




