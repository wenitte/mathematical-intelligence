# 

Source: https://proofwiki.org/wiki/Ratio_of_Consecutive_Fibonacci_Numbers/Proof_3


This article needs to be linked to other articles.In particular: We need to create a page explaining region of attractionYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
For $n \in \N$, let $f_n$ be the $n$th Fibonacci number.

Then:

$\ds \lim_{n \mathop \to \infty} \frac {f_{n + 1} } {f_n} = \phi$
where $\phi = \dfrac {1 + \sqrt 5} 2$ is the golden mean.


Proof
Let:














\(\ds a_n\)

\(:=\)







\(\ds \dfrac {f_{n + 1} } {f_n}\)




















\(\ds \map g x\)

\(:=\)







\(\ds 1 + \dfrac 1 x\)









Then:














\(\ds \map g {a_n}\)

\(=\)







\(\ds 1 + \dfrac {f_n} {f_{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {f_{n + 1} + f_n} {f_{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {f_{n + 2} } {f_{n + 1 } }\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds a_{n + 1}\)










This sequence represents the iterated dynamical system $a_{n + 1} = \map g {a_n}$ with initial condition $a_1 = 1$.

We have that:

$\size {\map {g'} \phi} = \dfrac 1 {\phi^2} < 1$

This article, or a section of it, needs explaining.In particular: Where does that come from?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence the golden mean $\phi$ is an attracting fixed point of $g$.


This article, or a section of it, needs explaining.In particular: Why does that follow from the above?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Additionally, since the interval $I := \closedint {\dfrac 3 2} 2$ is positively invariant under $g$


This article, or a section of it, needs explaining.In particular: prove itYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
and the derivative of $g$ is bounded above by $\dfrac 1 {\paren {3 / 2}^2} < 1$,


This article, or a section of it, needs explaining.In particular: prove itYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
then $g$ is a contraction mapping on $I$. 
Thus, by the Banach Fixed-Point Theorem, $I$ is in the region of attraction of $\phi$.


This article, or a section of it, needs explaining.In particular: we need other pages on this website proving the statements above.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Banach Fixed-Point Theorem only asserts the uniqueness of the fix point $\phi$, nothing about its attracting property.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Because $a_2 = 2 \in I$ is in the orbit of the dynamical system, the iterations converge to $\phi$. 
Therefore,

$\ds \lim_{n \mathop \to \infty} \dfrac {f_{n + 1} } {f_n} = \lim_{n \mathop \to \infty} a_n = \phi$
$\blacksquare$





