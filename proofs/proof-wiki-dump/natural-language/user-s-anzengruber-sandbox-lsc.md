# 

Source: https://proofwiki.org/wiki/User:S.anzengruber/Sandbox/LSC


This article is incomplete.In particular: Proof in Progress by S.anzengruberYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by expanding it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Stub}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $f: S \to \overline \R$ be an extended real valued function.
Let $S$ be endowed with a topology $\tau$.

The following are equivalent:

$(1): \quad$ $f$ is lower semicontinuous (LSC) on $S$.
$(2): \quad$ The epigraph $\map {\operatorname{epi} } f$ of $f$ is a closed set in $S \times \R$ with the product topology.
$(3): \quad$ All lower level sets of $f$ are closed in $S$.


Proof
Throughout the proof we use that the lower level set $\map {\operatorname{lev} \limits_{\mathop \le a} } f$ is closed if and only if

$\ds \map {\operatorname{lev} \limits_{\mathop > a} } f := \set {s \in S : ~ \map f s > a}$
is open.
The proof is carried out in the following steps:

LSC implies Closed Level Sets
Let $a \in \R$.
We prove that $\map {\operatorname{lev} \limits_{\mathop > a} } f$ is open.
Let $s_0 \in \map {\operatorname{lev} \limits_{\mathop > a} } f$.
Because $f$ is LSC this implies

$\ds \map f {s_0} = \liminf_{s \mathop \to s_0} \map f s > a$
Thus, by definition of the lower limit, there exists an open neighborhood $V_0$ of $s_0$ such that

$\ds \inf_{s \mathop \in V_0} \map f s > a$
This implies

$\ds V_0 \subseteq \map {\operatorname{lev} \limits_{\mathop > a} } f$
and hence proves that $\map {\operatorname{lev} \limits_{\mathop > a} } f$ is open.
$\Box$


Closed Level Sets implies LSC
Let $\map {\operatorname{lev} \limits_{\mathop \le a} } f$ be closed for all $a \in \R$.
Then $\map {\operatorname{lev} \limits_{\mathop > a} } f$ is open for all $a \in \R$.
Let $s_0 \in S$.
The definition of the lower limit implies

$\ds \liminf_{s \mathop \to s_0} \map f s \le \map f {s_0}$
It remains to show that
$(4) \quad \ds \map f {s_0} \le \liminf_{s \mathop \to s_0} \map f s$

Case 1: $\map f {s_0} = -\infty$. Then $(4)$ is trivial.
Case 2: $\map f {s_0} = +\infty$.
Let $n \in \N$.
Then $V_n := \map {\operatorname{lev} \limits_{\mathop > n} } f$ is an open neighborhood of $s_0$
Thus, by definition of the lower limit:
$\ds \liminf_{s \mathop \to s_0} \map f s \ge \inf_{s \mathop \in V_n} \map f s = n$
Since $n$ was arbitrary it follows that $\ds \liminf_{s \mathop \to s_0} \map f s = +\infty$.
Hence $(4)$.
Case 3: $\map f {s_0} \in \R$.
Let $\varepsilon > 0$.
Then $V_\varepsilon := \map {\operatorname{lev} \limits_{\mathop > \map f {s_0} - \varepsilon} } f$ is an open neighborhood of $s_0$
Thus, by definition of the lower limit:
$\ds \liminf_{s \mathop \to s_0} \map f s \ge \inf_{s \mathop \in V_\varepsilon} \map f s \ge \map f {s_0} - \varepsilon$
Since $\varepsilon > 0$ was arbitrary, $(4)$ follows.
$\Box$


LSC implies Closed Epigraph
$\Box$


Closed Epigraph implies Closed Level Sets

This article is incomplete.In particular: Proof is missingYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by expanding it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Stub}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

$\Box$
So:

$(1) \iff (2)$ and $(1) \iff (3)$
and the proof is complete.

$\blacksquare$


Sources
1990: Ioana Cioranescu: Geometry of Banach Spaces, Duality Mappings and Nonlinear Problems: Proposition $1.7$




