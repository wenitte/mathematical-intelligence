# 

Source: https://proofwiki.org/wiki/Ratio_of_Consecutive_Fibonacci_Numbers



Theorem
For $n \in \N$, let $f_n$ be the $n$th Fibonacci number.

Then:

$\ds \lim_{n \mathop \to \infty} \frac {f_{n + 1} } {f_n} = \phi$
where $\phi = \dfrac {1 + \sqrt 5} 2$ is the golden mean.


Proof 1
Let:














\(\ds \phi\)

\(:=\)







\(\ds \dfrac {1 + \sqrt 5} 2\)




















\(\ds \hat \phi\)

\(:=\)







\(\ds \paren {1 - \phi}\)

\(\ds = \dfrac {1 - \sqrt 5} 2\)


















\(\ds \alpha\)

\(:=\)







\(\ds \dfrac {\phi} {\hat \phi}\)









Then:














\(\ds \alpha\)

\(=\)







\(\ds \dfrac {\phi} {\hat \phi}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 + \sqrt 5} {1 - \sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 + \sqrt 5} {1 - \sqrt 5} \paren {\dfrac {1 + \sqrt 5} {1 + \sqrt 5} }\)





multiplying top and bottom by $1 + \sqrt 5$














\(\ds \)

\(=\)







\(\ds \dfrac {6 + 2 \sqrt 5} {-4}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {3 + \sqrt 5} 2\)










Recall the Euler-Binet Formula:

$f_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5}$
Let $n \ge 1$.
It immediately follows that:














\(\ds \frac {f_{n + 1} } {f_n}\)

\(=\)







\(\ds \dfrac {\phi^{n + 1} - \hat \phi^{n + 1} } {\phi^n - \hat \phi^n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\phi^{n + 1} - \phi \hat \phi^n} + \paren {\phi \hat \phi^n - \hat \phi^{n + 1} } } {\phi^n - \hat \phi^n}\)





adding and subtracting $\phi \hat \phi^n$ to the numerator














\(\ds \)

\(=\)







\(\ds \dfrac {\phi \paren {\phi^n - \hat \phi^n} + \hat \phi^n \paren {\phi - \hat \phi } } {\phi^n - \hat \phi^n}\)





factoring out $\phi$ and $\hat \phi^n$ in the numerator














\(\ds \)

\(=\)







\(\ds \phi + \dfrac {\hat \phi^n \paren {\phi - \hat \phi} } {\phi^n - \hat \phi^n}\)




















\(\ds \)

\(=\)







\(\ds \phi + \dfrac {\hat \phi^n \paren {\phi - \hat \phi} } {\phi^n - \hat \phi^n} \dfrac {\dfrac 1 {\hat \phi^n } } {\dfrac 1 {\hat \phi^n } }\)





multiplying top and bottom by $\dfrac 1 {\hat \phi^n }$














\(\ds \)

\(=\)







\(\ds \phi + \dfrac {\paren {\phi - \hat \phi} } {\dfrac {\phi^n} {\hat \phi^n} - 1}\)




















\(\ds \)

\(=\)







\(\ds \phi + \dfrac {\sqrt 5} {\alpha^n - 1}\)









From the definition of $\alpha$:

$\size \alpha > 1$
Therefore:














\(\ds \lim_{n \mathop \to \infty} \frac {f_{n + 1} } {f_n}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty}\ \phi + \dfrac {\sqrt 5} {\alpha^n - 1}\)




















\(\ds \)

\(=\)







\(\ds \phi + 0\)




















\(\ds \)

\(=\)







\(\ds \phi\)









$\blacksquare$


Proof 2
From Continued Fraction Expansion of Golden Mean: Successive Convergents, the $n$th convergent of the continued fraction expansion of $\phi$ is:

$C_n = \dfrac {f_{n + 1} } {f_n}$
The result follows from Continued Fraction Expansion of Irrational Number Converges to Number Itself.
$\blacksquare$


Proof 3
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


Historical Note
This result appears first to have been published by Simon Jacob in $1560$, but the work it appeared in was not well-known and subsequent mathematicians appear to have been unaware of it.

This result was observed by Johannes Kepler, but not established rigorously by him:

It is so arranged that the two lesser terms of a progressive series added together constitute the third ... and so on to infinity, as the same proportion continues unbroken. It is impossible to provide a perfect example in round numbers. However ... Let the smalllest numbers be $1$ and $1$, which you must imagine as unequal. Add them, and the sum will be $2$; add this to $1$, result $3$; add $2$ to this, and get $5$; add $3$, get $8$ ... as $5$ is to $8$, so $8$ is to $13$, approximately, and as $8$ is to $13$, so $13$ is to $21$, approximately.

However, it was Robert Simson in $1753$ who first explicitly stated that the Ratio of Consecutive Fibonacci Numbers tend to a limit.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Fibonacci sequence (Fibonacci, 1202)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): golden section
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Fibonacci sequence (Fibonacci, 1202)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): golden section




