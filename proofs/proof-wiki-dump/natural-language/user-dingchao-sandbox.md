# 

Source: https://proofwiki.org/wiki/User:DingChao/Sandbox


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring.In particular: Proofs on separate pages, in the standard house style.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Definition
Let $\LL$ be a first-order language and let $I$ be an infinite set.
Let $\UU$ be an ultrafilter on $I$.
Let $\MM_i$ be an $\LL$-structure for each $i\in I$

The ultraproduct:

$\MM := \ds \left({\prod_{i \mathop \in I} \MM_i }\right) / \UU$
is an $\LL$-structure defined as follows:


$(1): \quad$ The universe of $\MM$:
Let $X$ be the cartesian product:

$\prod_{i \mathop \in I} \MM_i$
Define an equivalence relation $\sim$ on $X$ by:

$\left({a_i}\right)_{i \mathop \in I} \sim \left({b_i}\right)_{i \mathop \in I}$ if and only if $\left\{ {i \in I: a_i = b_i}\right \} \in \UU$
The universe of $\MM$ is the set of equivalence classes of $X$ modulo $\sim$.
These are essentially sequences taken modulo the equivalence relation above, and are sometimes denoted $\left({m_i}\right)_\UU$.


$(2): \quad$ Interpretation of non-logical symbols of $\LL$ in $\MM$:
For each constant symbol $c$, we define $c^\MM$ to be $\left({c^{\MM_i} }\right)_\UU$.
For each $n$-ary function symbol $f$, we define $f^\MM$ by setting:

$f^\MM \left({\left({m_{1, i} }\right)_\UU, \dotsc, \left({m_{n, i} }\right)_\UU}\right)$
to be:

$\left({f^{\MM_i} \left({m_{1, i}, \dotsc, m_{n, i} }\right)}\right)_\UU$
For each $n$-ary relation symbol $R$, we define $R^\MM$ to be the set of $n$-tuples:

$\left({\left({m_{1, i} }\right)_\UU, \dots, \left({m_{n, i} }\right)_\UU}\right)$ from $\MM$
such that:

$\left\{ {i \in I: \left({m_{1, i}, \dotsc, m_{n, i} }\right) \in R^\MM_i}\right\} \in \UU$
Lemma
Following the definitions above

$(m_{k, i})_\UU = (m'_{k, i})_\UU$, $k = 1, \dotsc, n$
if and only if

$\left\{ i : \left({m_{1, i}, \dots, m_{n, i} }\right) = \left({m'_{1, i}, \dots, m'_{n, i} }\right) \right \} \in \UU$
Proof
Let

$I_k := \left\{ i \in I : m_{k, i} = m'_{k, i} \right\}$
$I^* :=  \left\{ i : \left({m_{1, i}, \dots, m_{n, i} }\right) = \left({m'_{1, i}, \dots, m'_{n, i} }\right) \right \} = \ds \bigcap^n_{k = 1} I_k $
Suppose

$(m_{k, i})_\UU = (m'_{k, i})_\UU$ for $k = 1, \dotsc, n$
we have

$I_k \in \UU$ for $k = 1, \dotsc, n$
Since $\UU$ is closed under intersection

$I^* \in \UU$
On the other hand, suppose 

$I^* \in \UU$
Since $\UU$ is closed under getting supersets

$I_k \in \UU$ for $k = 1, \dotsc, n$
Therefore

$(m_{k, i})_\UU = (m'_{k, i})_\UU$

$\blacksquare$

Proposition
The definition of $f^\MM$ is consistent. 
i.e. for $(m_{k, i})_\UU = (m'_{k, i})_\UU$, $k = 1, \dotsc, n$

$\left(f^{\MM_i}(m_{1, i}, \dots, m_{n, i})\right)_\UU = \left(f^{\MM_i}(m'_{1, i}, \dots, m'_{n, i})\right)_\UU$


Proof
Firstly note that: 

$\{i : f^{\MM_i}(m_{1, i}, \dots, m_{n, i}) = f^{\MM_i}(m'_{1, i}, \dots, m'_{n, i}) \} \supseteq  \{i : (m_{1, i}, \dots, m_{n, i}) = (m'_{1, i}, \dots, m'_{n, i}) \} $
and by $\UU$ is an ultrafilter on $I$, we have

$\{i : (m_{1, i}, \dots, m_{n, i}) = (m'_{1, i}, \dots, m'_{n, i}) \} \in \UU$
implies

$\{i : f^{\MM_i}(m_{1, i}, \dots, m_{n, i}) = f^{\MM_i}(m'_{1, i}, \dots, m'_{n, i}) \} \in \UU$
Therefore, 

$(m_{k, i})_\UU = (m'_{k, i})_\UU$, $k = 1, \dotsc, n$, by lemma, which is equvalent to $\{i : (m_{1, i}, \dots, m_{n, i}) = (m'_{1, i}, \dots, m'_{n, i}) \} \in \UU$
implies

$\left(f^{\MM_i}(m_{1, i}, \dots, m_{n, i})\right)_\UU = (f^{\MM_i}(m'_{1, i}, \dots, m'_{n, i}))_\UU$

$\blacksquare$

Proposition
The definition of $R^\MM$ is consistent. 
i.e. for $(m_{k, i})_\UU = (m'_{k, i})_\UU$, $k = 1, \dotsc, n$

$\left\{i \in I: \left({m_{1, i}, \dots, m_{n, i} }\right) \in R^\MM_i\right\} \in \UU$
if and only if

$\left\{i \in I: \left({m'_{1, i}, \dots, m'_{n, i} }\right) \in R^\MM_i\right\} \in \UU$


Proof
Let

$S := \left\{i \in I: \left({m_{1, i}, \dots, m_{n, i} }\right) \in R^\MM_i\right\}$
$S' := \left\{i \in I: \left({m'_{1, i}, \dots, m'_{n, i} }\right) \in R^\MM_i\right\}$
$I^* :=  \left\{ i : \left({m_{1, i}, \dots, m_{n, i} }\right) = \left({m'_{1, i}, \dots, m'_{n, i} }\right) \right \}$
$T := I^* \cap S$
$T' := I^* \cap S'$
As the lemma implies

$I^* \in \UU$
therefore

$S \in \UU$ implies $T \in \UU$
Note that

$\left({m_{1, i}, \dots, m_{n, i} }\right) = \left({m'_{1, i}, \dots, m'_{n, i} }\right)$ for $i \in I^*$
we have

$T = T'$
Hence

$T' \in \UU$
and

$S' \in \UU$ since $S' \supseteq T'$
So far we have proved

$S \in \UU$ implies $S' \in \UU$
By symmetry, 

$S' \in \UU$ implies $S \in \UU$
$\blacksquare$





