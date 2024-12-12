# 

Source: https://proofwiki.org/wiki/Expression_for_Integers_as_Powers_of_Same_Primes



Theorem
Let $a, b \in \Z$ be integers.
Let their prime decompositions be given by:














\(\ds a\)

\(=\)







\(\ds {q_1}^{e_1} {q_2}^{e_2} \cdots {q_r}^{e_r}\)




















\(\ds \)

\(=\)







\(\ds \prod_{\substack {q_i \mathop \divides a \\ \text {$q_i$ is prime} } } {q_i}^{e_i}\)




















\(\ds b\)

\(=\)







\(\ds {s_1}^{f_1} {s_2}^{f_2} \cdots {s_u}^{f_u}\)




















\(\ds \)

\(=\)







\(\ds \prod_{\substack {s_i \mathop \divides b \\ \text {$s_i$ is prime} } } {s_i}^{f_i}\)










Then there exist prime numbers:

$t_1 < t_2 < \dotsb < t_v$
such that:




\(\text {(1)}: \quad\)









\(\ds a\)

\(=\)







\(\ds {t_1}^{g_1} {t_2}^{g_2} \cdots {t_v}^{g_v}\)










\(\text {(2)}: \quad\)









\(\ds b\)

\(=\)







\(\ds {t_1}^{h_1} {t_2}^{h_2} \cdots {t_v}^{h_v}\)











General Result
Let $a_1, a_2, \dotsc, a_n \in \Z$ be integers.
Let their prime decompositions be given by:

$\ds a_i = \prod_{\substack {p_{i j} \mathop \divides a_i \\ \text {$p_{i j}$ is prime} } } {p_{i j} }^{e_{i j} }$

Then there exists a set $T$ of prime numbers:

$T = \set {t_1, t_2, \dotsc, t_v}$
such that:

$t_1 < t_2 < \dotsb < t_v$
$\ds a_i = \prod_{j \mathop = 1}^v {t_j}^{g_{i j} }$


Proof
In the prime decompositions $(1)$ and $(2)$, we have that:

$q_1 < q_2 < \dotsb < q_r$
and:

$s_1 < s_2 < \dotsb < s_u$

Hence we can define:














\(\ds E\)

\(=\)







\(\ds \set {q_1, q_2, \ldots, q_r}\)




















\(\ds F\)

\(=\)







\(\ds \set {s_1, s_2, \ldots, s_u}\)









as all the $q_1, q_2, \dotsc, q_r$ are distinct, and all the $s_1, s_2, \dotsc, s_u$ are distinct.

Then let:

$T = E \cup F$
and let the elements of $T$ be renamed as:

$T = \set {t_1, t_2, \ldots, t_v}$
where all the $t_1, t_2, \dotsc, t_v$ are distinct, and:

$t_1 < t_2 < \dotsb < t_v$

Let $\iota: E \to T$ be the inclusion mapping:

$\forall q_i \in E: \map \iota {q_i} = q_i$
Let $\iota: F \to T$ be the inclusion mapping:

$\forall s_i \in F: \map \iota {s_i} = s_i$

Then we have that:














\(\ds a\)

\(=\)







\(\ds \prod_{i \mathop = 1}^r {q_i}^{e_i}\)




















\(\ds \)

\(=\)







\(\ds \prod_{q_i \mathop \in E} {q_i}^{e_i} \times \prod_{t_i \mathop \in T \mathop \setminus E} {t_i}^0\)




















\(\ds \)

\(=\)







\(\ds \prod_{t_j \mathop \in T} {t_j}^{g_j}\)





where $g_j = \begin {cases} e_i & : t_j = q_i \\ 0 & : t_j \notin E \end{cases}$














\(\ds \)

\(=\)







\(\ds {t_1}^{g_1} {t_2}^{g_2} \dotsm {t_v}^{g_v}\)





for some $g_1, g_2, \dotsc, g_v \in \Z_{\ge 0}$




and:














\(\ds b\)

\(=\)







\(\ds \prod_{i \mathop = 1}^r {s_i}^{f_i}\)




















\(\ds \)

\(=\)







\(\ds \prod_{s_i \mathop \in F} {s_i}^{f_i} \times \prod_{t_i \mathop \in T \mathop \setminus F} {t_i}^0\)




















\(\ds \)

\(=\)







\(\ds \prod_{t_j \mathop \in T} {t_j}^{h_j}\)





where $h_j = \begin {cases} f_i & : t_j = s_i \\ 0 & : t_j \notin F \end{cases}$














\(\ds \)

\(=\)







\(\ds {t_1}^{h_1} {t_2}^{h_2} \dotsm {t_v}^{h_v}\)





for some $h_1, h_2, \dotsc, h_v \in \Z_{\ge 0}$




Thus $a$ and $b$ can be expressed as the product of powers of the same primes, on the understanding that one or more of the powers in either product may be zero.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-4}$ The Fundamental Theorem of Arithmetic: Exercise $4$




