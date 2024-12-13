# 

Source: https://proofwiki.org/wiki/Legendre%27s_Condition/Lemma_2


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma
Let $ h$ be a real function such that:

$h \in C^1 \openint a b$
$\map h a = 0$
$\map h b = 0$
Let:

$\ds \delta^2 J \sqbrk {y; h} = \int_a^b \paren {\map P {x, \map y x} h'^2 + \map Q {x, \map y x} h^2} \rd x$
where $P \in C^0 \closedint a b$. 

Then a necessary condition for:

$\delta^2 J \sqbrk {y; h} \ge 0$
is:

$\forall x \in \closedint a b: \map P {x, \map y x} \ge 0$


Proof
Assume that above is not true.
Then:

$\paren {\exists x_0 \in \closedint a b} \land \paren {\exists \beta \in \R_{<0} }: \map P {x_0} = -2 \beta$
$P$ is continuous.
Thus:

$\exists \alpha \in \R_{>0}: \paren {a \ge x_0 - \alpha} \land \paren {x_0 + \alpha \ge b}$
and:

$\forall x \in \openint {x_0 - \alpha} {x_0 + \alpha}: \map P x < -\beta$
In other words:
$\map P x \begin {cases}
= 0 & : x \in \closedint a {x_0 - \alpha} \lor \closedint {x_0 + \alpha} b \\
< 0 & : x \in \closedint {x_0 - \alpha} {x_0 + \alpha}
\end {cases}$
Let

$h = \begin {cases}
\sin^2 \paren {\dfrac {\map \pi {x - x_0} } \alpha} & : x_0 - \alpha \ge x \ge x_0 + \alpha \\
0 & : \text {otherwise}
\end {cases}$
It belongs to $C^1 \openint a b$ because:


This article, or a section of it, needs explaining.In particular: The derivation and significance of all the below: what they mean, what depends on what, etc.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.













\(\ds \lim_{x \mathop \to x_0 - \alpha + 0^+} h\)

\(=\)







\(\ds \lim_{x \mathop \to x_0 - \alpha + 0^+} \map {\sin^2} {\frac {\map \pi {x - x_0} } \alpha}\)




















\(\ds \)

\(=\)







\(\ds \map {\sin^2} {\map \pi {\frac {0^+} \alpha - 1} }\)




















\(\ds \)

\(=\)







\(\ds 0\)
























\(\ds \lim_{x \mathop \to x_0 - \alpha + 0^+}h'\)

\(=\)







\(\ds \lim_{x \mathop \to x_0 - \alpha + 0^+} \map \sin {\frac {2 \map \pi {x - x_0} } \alpha} \frac \pi \alpha\)




















\(\ds \)

\(=\)







\(\ds \map \sin {2 \map \pi {\frac {0^+} \alpha - 1} } \frac \pi \alpha\)




















\(\ds \)

\(=\)







\(\ds 0\)
























\(\ds \lim_{x \mathop \to x_0 - \alpha + 0^+}h\)

\(=\)







\(\ds \lim_{x \mathop \to x_0 - \alpha + 0^+} \map \cos {\frac {2 \map \pi {x - x_0} } \alpha} \frac {2 \pi^2} {\alpha^2}\)




















\(\ds \)

\(=\)







\(\ds \map \cos {2 \map \pi {\frac {0^+} \alpha - 1} } \frac {2 \pi^2} {\alpha^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \pi^2} {\alpha^2}\)






















\(\ds \lim_{x \mathop \to x_0 + \alpha + 0^-} h\)

\(=\)







\(\ds \lim_{x \mathop \to x_0 + \alpha + 0^-} \map {\sin^2} {\frac {\map \pi {x - x_0} } \alpha}\)




















\(\ds \)

\(=\)







\(\ds \map {\sin^2} {\map \pi {\frac {0^-} \alpha + 1} }\)




















\(\ds \)

\(=\)







\(\ds 0\)
























\(\ds \lim_{x \mathop \to x_0 + \alpha + 0^-}h'\)

\(=\)







\(\ds \lim_{x \mathop \to x_0 - \alpha + 0^-} \map \sin {\frac {2 \map \pi {x - x_0} } \alpha} \frac \pi \alpha\)




















\(\ds \)

\(=\)







\(\ds \map \sin {2 \map \pi {\frac {0^-} \alpha + 1} } \frac \pi \alpha\)




















\(\ds \)

\(=\)







\(\ds 0\)
























\(\ds \lim_{x \mathop \to x_0 + \alpha + 0^-}h\)

\(=\)







\(\ds \lim_{x \mathop \to x_0 - \alpha + 0^-} \map \cos {\frac {2 \map \pi {x - x_0} } \alpha} \frac {2 \pi^2} {\alpha^2}\)




















\(\ds \)

\(=\)







\(\ds \map \cos {2 \map \pi {\frac {0^-} \alpha + 1} } \frac {2 \pi^2} {\alpha^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {2\pi^2} {\alpha^2}\)









In other words, only $h$ and $h'$ are continuous in $\closedint a b$
Then:














\(\ds \int_a^b \paren {P h'^2 + Q h^2} \rd x\)

\(=\)







\(\ds \int_{x_0 - \alpha}^{x_0 + \alpha} P \frac {\pi^2} {\alpha^2} \map {\sin^2} {\frac {2 \map \pi {x - x_0} } \alpha} \rd x + \int_{x_0 - \alpha}^{x_0 + \alpha} Q \map {\sin^4} {\frac {\map \pi {x - x_0} } \alpha} \rd x\)




















\(\ds \)

\(<\)







\(\ds -\beta \frac {\pi^2} {\alpha^2} \int_{x_0 - \alpha}^{x_0 + \alpha} \map {\sin^2} {\frac {2 \map \pi {x - x_0} } \alpha} \rd x + \max_{a \le x \le b} \size {\map Q x} \int_{x_0 - \alpha}^{x_0 + \alpha} \map {\sin^4} {\frac {\map \pi {x - x_0} } \alpha}\rd x\)





as $\ds \map P x < -\beta, \quad \map Q x < \max_{a \mathop \le x \mathop \le b} \size {\map Q x}$














\(\ds \)

\(=\)







\(\ds -\beta \frac {\pi^2} \alpha + \max_{a \mathop \le x \mathop \le b} \size {\map Q x} \int_{x_0 - \alpha}^{x_0 + \alpha} \map {\sin^4} {\frac {\map \pi {x - x_0} } \alpha} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\beta \frac {\pi^2} \alpha + \frac 3 4 \alpha M\)









where:

$\ds M = \max_{a \mathop \le x \mathop \le b} \size {\map Q x}$
For sufficiently small $\alpha$ the right hand side is negative.
Hence, $\delta^2 J$ is negative for the corresponding $h$.
To conclude, it has been shown that

$P \ge 0 \quad \neg \forall x \in \closedint a b \implies \delta^2 J<0$
Then, by contrapositive statement this is equivalent to:

$\forall x \in \closedint a b: \delta^2 J \ge 0 \implies P \ge 0$
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 5.25$: The Formula for the Second Variation. Legendre's Condition





