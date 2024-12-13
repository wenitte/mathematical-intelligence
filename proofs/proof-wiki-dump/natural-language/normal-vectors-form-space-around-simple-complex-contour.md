# 

Source: https://proofwiki.org/wiki/Normal_Vectors_Form_Space_around_Simple_Complex_Contour

Theorem
Let $C$ be a simple contour in the complex plane $\C$ with parameterization $\gamma: \closedint a b \to \C$.
Let $t \in \openint a b$ such that $\gamma$ is complex-differentiable at $t$.

Then there exists $r, R \in \R_{>0}$ such that:

for all $s \in \openint { t-R }{ t+R }$ and for all $\epsilon \in \openint 0 r$: $\map \gamma s + \epsilon i \map {\gamma'} s \notin \Img C$, and $\map \gamma s - \epsilon i \map {\gamma'} s \notin \Img C$
where $\Img C$ denotes the image of $C$.


Proof
Suppose there exists no $r, R \in \R_{>0}$ such that for all $s \in \openint { t-R }{ t+R }$ and for all $\epsilon \in \openint 0 r$, we have $\map \gamma s + \epsilon i \map {\gamma'} s \notin \Img C$.
It follows that for all $n \in \N$, there exists $t_n \in \openint { t - \dfrac 1 n }{ t + \dfrac 1 n }$ and $\epsilon \in \openint 0 {\dfrac 1 n}$ with $\tilde t_n \in \openint a b$ such that:

$ \map \gamma {t_n} + \epsilon_n i \map {\gamma'}{t_n} = \map \gamma {\tilde t_n}$

Using the Bolzano-Weierstrass Theorem, we find a convergent subsquence $\sequence { \tilde t_{n_m} }_{m=1}^\infty$ with $\ds \lim_{m \mathop \to \infty} \tilde t_{n_m} = t_0 \in \closedint a b$.
Then:














\(\ds \map \gamma {t_0}\)

\(=\)







\(\ds \ds \lim_{m \mathop \to \infty} \map \gamma {\tilde t_{n_m} }\)





by definition of continuity














\(\ds \)

\(=\)







\(\ds \ds \lim_{m \mathop \to \infty} \map \gamma {t_{n_m} } + \paren{ \lim_{m \mathop \to \infty} \epsilon_{n_m} } i \lim_{m \mathop \to \infty} \map {\gamma'}{t_{n_m} }\)





Combination Theorem for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \map \gamma t + \paren{ \lim_{m \mathop \to \infty} \epsilon_{n_m} } i \map {\gamma'} t\)





Limit of Subsequence equals Limit of Sequence and definition of continuity














\(\ds \)

\(=\)







\(\ds \map \gamma t\)





as $\lim_{n \mathop \to \infty} \epsilon_n = 0$




As $C$ is a simple contour, it follows that $t_0 = t$.
Then:














\(\ds \map {\gamma'} t\)

\(=\)







\(\ds \ds \lim_{h \mathop \to 0} \dfrac {\map \gamma {t+h} - \map \gamma t } h\)





by definition of differentiability














\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \dfrac {\map \gamma { \tilde t_{n_m} } - \map \gamma t }{ \Delta t_{n_m} }\)





with $\Delta t_{n_m} = \tilde t_{n_m} - t$














\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \dfrac { \map \gamma {t_{n_m} } + \epsilon_{n_m} i \map {\gamma'}{t_{n_m} } - \map \gamma t }{ \Delta t_{n_m} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \dfrac { \epsilon_{n_m} }{ \Delta t_{n_m} } i \map {\gamma'} t\)





Limit of Subsequence equals Limit of Sequence and Combination Theorem for Limits of Complex Functions




Set $c := \ds \lim_{m \mathop \to \infty} \dfrac { \epsilon_{n_m} }{ \Delta t_{n_m} }$.
As $\gamma$ is differentiable at $t$, it follows that $c$ is defined as a limit.
As $\epsilon_{n_m}, \Delta t_{n_m} \in \R$ for all $m \in \N$, it follows that $c \in \R$.
As $\map {\gamma'} t \ne 0$ by definition of smooth path, it follows that $c \ne 0$.
From the equations above, we have:














\(\ds \map {\gamma'} t\)

\(=\)







\(\ds c i \map {\gamma'} t\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds c i\)





divide both sides by $\map {\gamma'} t$




As $1$ is wholly real, while $c i$ is wholly imaginary, this is a contradiction.
It follows that there exists $r_0, R_0 \in \R_{>0}$ such that:

for all $s \in \openint { t - R_0 }{ t + R_0 }$ and for all $\epsilon \in \openint 0 {r_0}$: $\map \gamma s + \epsilon i \map {\gamma'} s \notin \Img C$

A similar argument shows that there exists $r_1, R_1 \in \R_{>0}$ such that:

for all $s \in \openint { t - R_1 }{ t + R_1 }$ and for all $\epsilon \in \openint 0 {r_1}$: $\map \gamma s - \epsilon i \map {\gamma'} s \notin \Img C$

To prove the claim of the theorem, set $r = \map \min {r_0, r_1}$, and $R = \map \min {R_0, R_1}$.
$\blacksquare$





