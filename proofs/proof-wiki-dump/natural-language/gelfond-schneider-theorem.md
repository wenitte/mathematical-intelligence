# 

Source: https://proofwiki.org/wiki/Gelfond-Schneider_Theorem

  This article is a landmark page.  It was the 4000th proof on $\mathsf{Pr} \infty \mathsf{fWiki}$!

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\alpha$ and $\beta$ be algebraic numbers (possibly complex) such that $\alpha \notin \set {0, 1}$.
Let $\beta$ be irrational.

Then any value of $\alpha^\beta$ is transcendental.


Proof
Let $\alpha$ be an algebraic number such that $\alpha \ne 0$ and $\alpha \ne 1$.
Let $\beta$ be an algebraic number such that some value of $\alpha^\beta$ is algebraic.
The result will follow if we can show that $\beta \in \Q$.

We treat only the special case that $\alpha, \beta \in \R$ and $\alpha > 0$, assuming that $\map \exp {\beta \ln \alpha}$ is algebraic for the real value of $\ln \alpha$.
Observe that $\alpha^{s_1 + s_2 \beta}$ is an algebraic number for all integers $s_1$ and $s_2$.
To establish the result, it is enough to show that there are two distinct pairs of integers $\tuple {s_1, s_2}$ and $\tuple {s'_1, s'_2}$ for which:

$s_1 + s_2 \beta = s'_1 + s'_2 \beta$
since that implies:

$\beta = \dfrac{s_1 - s'_1} {s'_2 - s_2} \in \Q$
We will choose $S$ sufficiently large and show such pairs exist with $0 \le s_1, s_2, s'_1, s'_2 < S$.


Lemma 1
Let $\map {a_1} t, \ldots, \map {a_n} t$ be non-zero polynomials in $\R \sqbrk t$ of degrees $d_1, \ldots, d_n$ respectively.
Let $w_1, \ldots, w_n$ be pairwise distinct real numbers.

Then:

$\ds \map F t = \sum_{j \mathop = 1}^n \map {a_j} t e^{w_j t}$
has at most $d_1 + \cdots + d_n + n − 1$ real roots (counting multiplicities).


Lemma 2
Let $\map f z$ be an analytic function in the open disk $D \subseteq \C: D = \set {z : \size z < R}$ for some real number $R > 0$.
Let $f$ also be continuous on the closure of $D$, that is, on $D^- = \set {z : \size z \le R}$.

Then:

$\forall z \in D^-: \size {\map f z} \le \size f_R$
where we set:

$\ds \size f_R = \max_{\size z \mathop = R} \size {\map f z}$


Lemma 3
Let $r$ and $R$ be two real numbers such that $0 < r \le R$.
Let $\map {f_1} z, \map {f_2} z, \ldots, \map {f_L} z$ be:

analytic in $D \subseteq \C: D = \set {z : \size z < R}$
continuous on the closure $D$, that is, $D^- = \set {z: \size z \le R}$.
Let $\zeta_1, \ldots, \zeta_L$ be complex numbers such that:

$\forall j \in \set {1, 2, \ldots, L}: \size {\zeta_j} \le r$

Then the determinant:

$\Delta = \det \begin {bmatrix}
\map {f_1} {\zeta_1} & \cdots & \map {f_L} {\zeta_1} \\
\vdots & \ddots & \vdots \\
\map {f_1} {\zeta_L} & \cdots & \map {f_L} {\zeta_L}
\end{bmatrix}$
satisﬁes:

$\ds \size \Delta \le \paren {\frac R r}^{−L \paren {L − 1} / 2} L! \prod_{\lambda \mathop = 1}^L \size {f_λ}_R$


Lemma 4
Let:

$\Delta = \det \sqbrk {\alpha_{i, j} }_{L \times L}$
where the $\alpha_{i, j}$ are algebraic numbers.
Suppose that $T$ is a positive (rational) integer for which $T \alpha_{i, j}$ is an algebraic integer for every $i, j \in \set {1, 2, \ldots, L}$.
Also, suppose that $\Delta \ne 0$.

Then there is a conjugate of $\Delta$ with absolute value $\ge T^{−L}$.


Construction of the matrix $\boldsymbol M$ and outline of the proof
Let $c$ be a sufficiently large real number (which will be specified in due course).
Consider integers $L_0, L_1, S$ each $\ge 2$.
Let $L = \paren {L_0 + 1} \paren {L_1 + 1}$.
Observe that we can find such $L_0, L_1, S$ (and we do so) with:

$c L_0 \ln S \le L$, $c L_1 S \le L$, $L \le S^2$
For example, take $S$ large, and:

$L_0 = \floor {S \ln S}, L_1 = \floor {\dfrac S {2 \ln S} }$
Note that we could take $c = \ln \ln S$.

Consider the matrix $M$ described as follows.
Consider some arrangement $\tuple {\map {s_1} i, \map {s_2} i}$ of the $S^2$ integer pairs $\tuple {s_1, s_2}$ with $0 \le s_1 < S$ and $0 \le s_2 < S$.
Also, consider some arrangement $\tuple {\map u j, \map v j}$, with $1 \le j \le L$, of the integer pairs $\tuple {u, v}$ where $0 \le u \le L_0$ and $0 \le v \le L_1$.
Then we define:

$M = \sqbrk {\paren {\map {s_1} i + \map {s_2} i \beta}^{\map u j} \paren {\alpha^{\map {s_1} i + \map {s_2} i \beta} }^{\map v j} }$
so that $M$ is a $S^2 \times L$ matrix.

The idea of the proof is to:

$(1): \quad$ Consider the determinant $\Delta$ of an arbitrary $L \times L$ submatrix of $M$ (any one will do).
$(2): \quad$ Use Lemma $3$ to obtain an upper bound $B_1$ for the absolute value of $\Delta$ (or, more specifically, an upper bound for $\ln \size \Delta$).
$(3): \quad$ Use Lemma $4$ to motivate that if $\Delta \ne 0$, then $\size \Delta \ge B_2$ for some $B_2 > B_1$.
$(4): \quad$ Conclude that $\Delta$ must be $0$ and, hence, the rank of $M$ is less than $L$.
$(5): \quad$ Take a linear combination of the columns of $M$ to obtain an $\map F t$ as in Lemma $1$ with less than $L$ roots but with $\map F {\map {s_1} i + \map {s_2} i \beta} = 0$ for $1 \le i \le L$.
$(6): \quad$ Conclude that $\beta$ is rational as required.


Upper bound for $\size \Delta$
We have not specified the arrangements defining $\tuple {\map {s_1} i, \map {s_2} i}$ and $\tuple {\map u j, \map v j}$.
Therefore it suffices to consider $\Delta = \det \sqbrk {\map {f_j} {\zeta_i} }$ where:

$\map {f_j} z = z^{\map u j} \alpha^{\map v j z} \quad \paren {1 \le j \le L}$
and:

$\zeta_i = \map {s_1} i + \map {s_2} i \beta \quad \paren {1 \le i \le L}$
Observe that $\map u j$ is a non-negative integer for each $j$.
Also, $\alpha^{\map v j z} = \map \exp {\map v j z \ln \alpha}$, where $\ln \alpha$ denotes the real value of the logarithm.
Hence, $\map {f_j} z$ is uniquely defined.
Then $\map {f_j} z$ represents an entire function for each $j$.
Observe that:

$\size {e^{z_1 z_2} } = e^{\map \Re {z_1 z_2} } \le e^{\size {z_1 z_2} } = e^{\size {z_1} \size {z_2} }$
for all complex numbers $z_1$ and $z_2$.


This article, or a section of it, needs explaining.In particular: Prove the above, or link to such a proofYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence, for any $R > 0$:

$\size {f_j}_R \le R^{\map u j} e^{\map v j R \size {\ln \alpha} }$
We use Lemma $3$ with $r = S \paren {1 + \size {\beta} }$ and $R = e^2 r$.
Then for some constant $c_1 > 0$, we obtain:














\(\ds \ln \size \Delta\)

\(\le\)







\(\ds -L \paren {L - 1} + \ln L! + L \max_{1 \mathop \le j \mathop \le L} \set {\ln \size {f_j}_R}\)




















\(\ds \)

\(\le\)







\(\ds -L \paren {L - 1} + L \ln L + L L_0 \ln R + L L_1 R \size {\ln \alpha}\)




















\(\ds \)

\(\le\)







\(\ds -L^2 + c_1 \paren {L L_0 \ln S + L L_1 S}\)









The constant $c_1$ above is independent of $c$.
Therefore, if $c$ is sufficiently large (that is, $c \ge 4 c_1$), then:

$\ln \size \Delta \le -\dfrac {L^2} 2$


Lower bound for $\size \Delta$ if $\Delta \ne 0$
Suppose now that $T'$ is a positive rational integer for which $T' \alpha, T' \beta$ and $T'\alpha^\beta$ are all algebraic integers.
Then $T = \paren {T'}^{L_0 + 2 S L_1}$ has the property that $T$ times any element of $M$ (and, hence, $T$ times any element of the matrix defining $\Delta$) is an algebraic integer.
Therefore, by Lemma $4$, if $\Delta \ne 0$, then there is a conjugate of $\Delta$ with absolute value $\ge T^{-L} = \paren {T'}^{-L L_0 - 2 S L L_1}$.
It may be reasonable to expect that a similar inequality might hold for $\size \Delta$ itself (rather than for the absolute value of a conjugate of $\Delta$).
It will be shown later that if $\Delta \ne 0$, then there is indeed a constant $c_2$ (independent of $c$) for which:

$(A) \quad \ln \size \Delta \ge -c_2 \paren {L L_0 \ln S + S L L_1}$


Conclusion
We see that, for $c$ sufficiently large ($c \ge 8 c_2$ will do), our upper bound for $\ln \size \Delta$ would contradict $(A)$, hence we obtain that $\Delta = 0$.
Since $\Delta = \det \sqbrk {\map {f_j} {\zeta_i} }$ as defined above, we get that the columns of $\sqbrk {\map {f_j} {\zeta_i} }$ must be linearly dependent over the real numbers.
In other words, there exist real numbers $b_j$, not all $0$, such that:

$\ds \sum_{j \mathop = 1}^L b_j \map {f_j} {\zeta_i} = 0$ for $1 \le i \le L$
We now order the pairs $\tuple {u, v}$ in such a way that $\tuple {u, v} \le \tuple {u', v'}$ if and only if $v < v'$, or $v = v'$ and $u \le u'$.
We deduce that:

$\ds \sum_{v \mathop = 0}^{L_1} \sum_{u \mathop = 0}^{L_0} b_{\paren {L_0 + 1} v + u + 1} \zeta_i^u \alpha^{v \zeta_i} = 0$ for $1 \le i \le L$
But:

$\ds \sum_{v \mathop = 0}^{L_1} \sum_{u \mathop = 0}^{L_0} b_{\paren {L_0 + 1} v + u + 1} \zeta_i^u \alpha^{v \zeta_i} = \sum_{v \mathop = 0}^{L_1} \map {a_v} t e^{w_v t}$
where:

$\ds \map {a_v} t = \sum_{u \mathop = 0}^{L_0} b_{\paren {L_0 + 1} v + u + 1} t^u, w_v = v \ln \alpha$
and:

$t = \zeta_i = \map {s_1} i + \map {s_2} i \beta$
Each of the $L$ values of $\zeta_i$ is a root of the function $\ds \sum_{v \mathop = 0}^{L_1} \map {a_v} t e^{w_v t}$.
Since some $b_j \ne 0$, we deduce from Lemma $1$ that there are at most $L_0 \paren {L_1 + 1} + \paren {L_1 + 1} - 1 < L$ distinct real roots.
Therefore, two roots $\zeta_i$ must be the same, and we can conclude that:

$\map {s_1} i + \map {s_2} i \beta = \map {s_1} {i'} + \map {s_2} {i'} \beta$
for some $i, i'$ with $1 \le i < i' \le L$.
On the other hand, the pairs $\tuple {\map {s_1} i, \map {s_2} i}$ and $\tuple {\map {s_1} {i'}, \map {s_2} {i'} }$ are necessarily distinct.
So we can conclude that $\beta$ is rational, completing the proof.


Proof of inequality $(A)$
To finish the proof, all we need to do is to show that if
$\Delta \ne 0$, then $(A)$ holds.
Assume $\Delta \ne 0$ and recall that $T^L \Delta$ is an algebraic integer, where $T=(T')^{L_0+2SL_1}$ and $T'$ is a positive integer (depending only on $\alpha$, $\beta$, and $\alpha^\beta$).
For an algebraic number $w$, we denote by $\norm w$ the maximum of the absolute value of a conjugate of $w$.
Observe that:

$\norm {w + w'} \le \norm w + \norm {w'}$, $\norm {w w'} \le \norm w \norm {w'}$
and:

$\norm {\lambda w} = \size \lambda \norm w$
whenever $w, w'$ are algebraic numbers and $\lambda \in \Q$.
Then we obtain that:

$\norm {T^L \Delta} = T^L \norm \Delta \le T^L L! S^{L_0 L} \paren {1 + \norm \beta}^{L_0 L} \paren {1 + \norm \alpha}^{S L_1 L} \paren {1 + \norm {\alpha^\beta} }^{S L_1 L}$
We have that $T^L \Delta$ is an algebraic integer in $\map Q {\alpha, \beta, \alpha^\beta}$.
So we can deduce that $T^L \Delta$ is a root of an irreducible monic polynomial $\map g x$ of degree $N$ where $N$ is the product of the degrees of the minimal polynomials for $\alpha, \beta, \alpha^\beta$.
Note that each root of $\map g x$ is a conjugate of $T^L \Delta$.
Since:

the product of all the roots of $\map g x$ has absolute value $\size {\map g 0} \ge 1$
and:

each root of $\map g x$ has absolute value $\le \norm {T^L \Delta}$
it follows that:














\(\ds \size {T^L \Delta}\)

\(\ge\)







\(\ds \dfrac {\size {\map g 0} } {\norm {T^L \Delta}^{N - 1} }\)




















\(\ds \)

\(\ge\)







\(\ds T^{-\paren {N - 1} L} \paren {L!}^{-N} S^{-N L_0 L} \paren {1 + \norm \beta}^{-N L_0 L} \paren {1 + \norm \alpha}^{-N S L_1 L} \paren {1 + \norm {\alpha^\beta} }^{-N S L_1 L}\)









Hence:














\(\ds \ln \size \Delta\)

\(\ge\)







\(\ds -N L \ln T - N L \ln L - N L_0 L \ln S - N L_0 L \map \ln {1 + \norm \beta}\)




















\(\ds \)

\(\)







\(\ds - N S L_1 L \map \ln {1 + \norm \alpha} - N S L_1 L \map \ln {1 + \norm {\alpha^\beta} }\)









Recall that $T = \paren {T'}^{L_0 + 2 S L_1}$ and that $T'$ and $N$ are constants depending only on $\alpha$ and $\beta$.
It follows that $(A)$ holds, and the proof for $\alpha > 0$ and $\beta$ real follows.
$\blacksquare$


Source of Name
This entry was named for Alexander Osipovich Gelfond and Theodor Schneider.


Historical Note
The Gelfond-Schneider Theorem was proved in $\text {1934}$ – $\text {1935}$ by Alexander Osipovich Gelfond and Theodor Schneider.


Hilbert $23$
This problem is no. $7$ in the Hilbert $23$.


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Gelfond-Schneider theorem
The Gelfond-Schneider Theorem and Some Related Results




