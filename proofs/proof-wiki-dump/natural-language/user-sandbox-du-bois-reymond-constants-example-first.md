# 

Source: https://proofwiki.org/wiki/User:Sandbox/Du_Bois-Reymond_Constants/Example/First

Example of Du Bois-Reymond Constant
The first du Bois-Reymond constant $C_1$ does not exist.
This is because:

$\ds \int_0^\infty \size {\map {\dfrac \d {\d t} } {\dfrac {\sin t} t}^n} \rd t - 1$
does not converge for $n = 1$.


Proof
Let:

$\ds \map f t = \frac{\sin t} t$
Its derivative is:

$\ds \map {f'} t = \frac{t \map \cos t - \map \sin t}{t^2}$
Let $\ds \sequence {t_n}_{n \mathop = 1}^\infty$ be all the positive roots of $\map {f'} {t}$ in increasing order.
Equivalently, $\ds \sequence {t_n}_{n \mathop = 1}^\infty$ are all the positive roots of $t = \map \tan t$.

So:




\(\text {(1)}: \quad\)









\(\ds n \pi\)

\(<\)







\(\ds t_n\)

\(\ds < \frac {\pi} 2 + n \pi\)




This needs considerable tedious hard slog to complete it.In particular: Need to transcribe the proof on stackexchangeTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.



and:




\(\text {(2)}: \quad\)









\(\ds \size {\map \sin {t_n} }\)

\(\ge\)







\(\ds \size {\map \sin {t_1} }\)






This needs considerable tedious hard slog to complete it.In particular: Need to transcribe the proof on stackexchangeTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




Since $\sequence {t_n}$ are roots of $f'$, the sign of $\map {f'} t$ alternates between positive and negative on each interval:














\(\ds \map {f'} t\)

\(<\)







\(\ds 0\)





for $0 < t < t_1$














\(\ds \map {f'} t\)

\(>\)







\(\ds 0\)





for $t_1 < t < t_2$














\(\ds \map {f'} t\)

\(<\)







\(\ds 0\)





for $t_2 < t < t_3$














\(\ds \map {f'} t\)

\(>\)







\(\ds 0\)





for $t_3 < t < t_4$














\(\ds \)

\(\vdots\)







\(\ds \)










By definition of absolute value:

$\size {\map {f'} t} = -\map {f'} t$ for $t \in \closedint 0 {t_1} \cup \closedint {t_2} {t_3} \cup \cdots$
$\size {\map {f'} t} = \map {f'} t$ for $t \in \closedint {t_1} {t_2} \cup \closedint {t_3} {t_4} \cup \cdots$













\(\ds \size {\map {f'} t}\)

\(=\)







\(\ds -\map {f'} t\)





for $t \in \closedint 0 {t_1} \cup \closedint {t_2} {t_3} \cup \cdots$














\(\ds \size {\map {f'} t}\)

\(=\)







\(\ds \map {f'} t\)





for $t \in \closedint {t_1} {t_2} \cup \closedint {t_3} {t_4} \cup \cdots$




Also, by Fundamental Theorem of Calculus:

$\ds \int_{t_n}^{t_{n + 1} } \map {f'} t \rd t = \map f {t_{n + 1} }- \map f {t_n}$
Substituting these into the integral:














\(\ds \ds \int_0^\infty \size {\map {f'} t} \rd t\)

\(=\)







\(\ds \int_0^{t_1} \size {\map {f'} t} \rd t + \int_{t_1}^{t_2} \size {\map {f'} t} \rd t + \cdots\)




















\(\ds \)

\(=\)







\(\ds -\paren {\map f {t_1} - 0} + \paren {\map f {t_2}- \map f {t_1} } - \paren {\map f {t_3}- \map f {t_2} } + \paren {\map f {t_4}- \map f {t_3} } - \cdots\)




















\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop = 1}^\infty \size {\map f {t_n} }\)










\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop = 1}^\infty \frac{\size {\map \sin {t_n} } } {t_n}\)









By $(1)$, we have:

$t_n < \dfrac \pi 2 + n \pi$
By $(2)$, we have:

$\size {\map \sin {t_1} } \le \size {\map \sin {t_n} }$
So:

$\dfrac {\size {\map \sin {t_n} } } {t_n} > \dfrac {\size {\map \sin {t_1} } } {\dfrac \pi 2 + n \pi}$
But:

$\ds \sum_{n \mathop = 1}^\infty \frac {\size {\map \sin {t_1} } } {\frac \pi 2 + n \pi} = \infty$
By Comparison Test for Divergence:

$\ds \sum_{n \mathop = 1}^\infty \frac{\size {\map \sin {t_n} } }{t_n} = \infty$
By $(3)$, the integral diverges.
$\blacksquare$





