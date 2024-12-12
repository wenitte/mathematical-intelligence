# 

Source: https://proofwiki.org/wiki/Dirichlet_Integral/Proof_2

Theorem
$\ds \int_0^\infty \frac {\sin x} x \rd x = \frac \pi 2$


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: In several places in the below, the proof works backwards: "a because b because c". Should be changed to the form "c therefore b therefore a" and so we can cut the long complex sentences out and replace with the house style simple statements.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

This article, or a section of it, needs explaining.In particular: I know it's pretty obvious what the notation $\to_{\alpha \mathop \to 0}$ actually means, but a) it's ugly, and b) it's not supported on $\mathsf{Pr} \infty \mathsf{fWiki}$. Hence we need to replace the above with a version of the notation that is documented and used on this site.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

$\ds \int_0^\infty \frac {\sin x} x \rd x$ is convergent as an improper integral.
Indeed, for all $n \in \N$:














\(\ds \int_0^{2\pi n}\frac {\sin x} {x} \rd x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{2 n \mathop - 1}\int_{\pi k}^{\pi \paren {k + 1} }\frac {\sin x} {x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{2 n \mathop - 1} {\paren {-1} }^k \int_0^\pi \frac {\sin x} {x + \pi k} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{2 n \mathop - 1} \frac { {\paren {-1} }^k} {\pi k} \int_0^\pi \frac {\sin x} {1 + \frac x {\pi k} } \rd x\)









But:














\(\ds \size {\int_0^\pi \frac {\sin x} {1 + \frac x {\pi k} } \rd x - 2}\)

\(\le\)







\(\ds \int_0^\pi \sin x \size {\frac 1 {1 + \frac x {\pi k} } - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {k \pi} \int_0^\pi x \sin x \rd x\)









so that:

$\ds \int_0^\pi \frac {\sin x} {1 + \frac x {k \pi} } \rd x \to_{k \mathop \to \infty} 2$
Hence:

$\ds \int_0^{2\pi n }\frac {\sin x} x \rd x = \sum_{k \mathop = 0}^{n \mathop -1} \frac 1 {2 \pi k} \int_0^\pi \frac {\sin x} {1 + \frac x {2 \pi k} } \rd x - \frac 1 {\pi \paren {2 k + 1} } \int_0^\pi \frac {\sin x} {1 + \frac x {\pi \paren {2 k + 1} } } \rd x$
can be expressed as a series whose general term is equivalent to:

$\dfrac 2 \pi \times \dfrac 1 {2 k \paren {2 k + 1} }$
which is the term of an absolutely convergent series.

By Modulus of Sine of x Less Than or Equal To Absolute Value of x:

$\ds \size {\frac {e^{-\alpha x} \sin x} x} \le e^{-\alpha x}$
From Laplace Transform of Real Power: 

$\ds \int_0^\infty e^{-\alpha x} \rd x = \frac 1 \alpha$
Hence by Comparison Test for Improper Integral:

$\ds \int_0^\infty \frac {e^{-\alpha x} \sin x} x \rd x$
converges whenever $\alpha > 0$.
So, we can define a real function $I : \openint 0 \infty \to \R$ by: 

$\ds \map I \alpha = \int_0^\infty \frac {e^{-\alpha x} \sin x} x \rd x$
for each $\alpha \in \openint 0 \infty$.

Using Improper Integral of Partial Derivative on segments included in $\openint 0 \infty$:














\(\ds \map {I'} \alpha\)

\(=\)







\(\ds \frac \partial {\partial \alpha} \int_0^\infty \frac {e^{-\alpha x} \sin x} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac \partial {\partial \alpha} \frac {e^{-\alpha x} \sin x} x \rd x\)





Leibniz's Integral Rule














\(\ds \)

\(=\)







\(\ds -\int_0^\infty e^{-\alpha x} \sin x \rd x\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds \intlimits {-\frac {e^{-\alpha x} \paren {-\alpha \sin x + \cos x} } {\paren {-\alpha}^2 + 1} } 0 \infty\)





Primitive of $e^{\alpha x} \sin b x$














\(\ds \)

\(=\)







\(\ds -\frac 1 {\alpha^2 + 1}\)









Therefore, by Derivative of Arctangent Function

$\map I \alpha = -\arctan \alpha + K$
for some $K \in \R$.
We also have: 














\(\ds \size {\map I \alpha}\)

\(=\)







\(\ds \size {\int_0^\infty \frac {e^{-\alpha x} \sin x} x \rd x}\)




















\(\ds \)

\(\le\)







\(\ds \int_0^\infty \size {\frac {e^{-\alpha x} \sin x} x} \rd x\)





Triangle Inequality for Definite Integrals














\(\ds \)

\(\le\)







\(\ds \frac 1 \alpha\)









so:

$\ds \lim_{\alpha \mathop \to \infty} \size {\map I \alpha} = 0$
That is: 

$\ds \lim_{\alpha \mathop \to \infty} \map I \alpha = 0$
Therefore:

$\map I \alpha = \dfrac \pi 2 - \arctan \alpha$
since $\ds \arctan \alpha \to_{\alpha \mathop \to \infty} \frac \pi 2$.
Note that we have:

$\ds \map I \alpha \to_{\alpha \mathop \to 0} \frac \pi 2$
We now need to show that:

$\ds \map I \alpha \to_{\alpha \mathop \to 0} \int_0^\infty \frac {\sin x} x \rd x$
Observe for this purpose that:














\(\ds \map I \alpha\)

\(=\)







\(\ds \int_0^\infty \frac {\sin 2 x} x e^{-2 \alpha x} \rd x\)





change of variable $x \mapsto 2 x$














\(\ds \)

\(=\)







\(\ds 2 \int_0^\infty \frac {\sin x} x e^{-2 \alpha x} \cos x \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \intlimits {\frac {\sin^2 x} x e^{-2 \alpha x} } 0 \infty - 2 \int_0^\infty \sin x e^{-2 \alpha x} \paren {-\alpha \frac {\sin x} x + \frac {\cos x} x - \frac {\sin x} {x^2} } \rd x\)





integration by Parts for improper integral














\(\ds \)

\(=\)







\(\ds 2 \alpha \int_0^\infty \frac {\sin^2 x} x e^{-2 \alpha x} \rd x + 2\int_0^\infty {\paren {\frac {\sin x} x} }^2 e^{-2 \alpha x} \rd x - \map I \alpha\)





by Continuous Real Function/Examples, $\dfrac {\sin x} x \to 1$ in $0$



where all the improper integrals appearing here are convergent by Comparison Test for Improper Integral, as used above for defining $\map I \alpha$.
Therefore:

$\ds \map I \alpha = \alpha \int_0^\infty \frac {\sin^2 x} x e^{-2 \alpha x} \rd x + \int_0^\infty {\paren {\frac {\sin x} x} }^2 e^{-2 \alpha x} \rd x$

We also have:














\(\ds \int_0^\infty \frac {\sin x} x \rd x\)

\(=\)







\(\ds 2 \int_0^\infty \frac {\sin x} x \cos x \rd x\)





by change of variable $x \mapsto 2 x$














\(\ds \)

\(=\)







\(\ds 2 \intlimits {\frac {\sin^2 x} x} 0 \infty - 2\int_0^\alpha \frac {\sin x} x \cos x \rd x + 2\int_0^\infty {\paren {\frac {\sin x} x} }^2 \rd x\)




















\(\ds \)

\(=\)







\(\ds -\int_0^\infty \frac {\sin x} x \rd x + 2 \int_0^\infty {\paren {\frac {\sin x} x} }^2 \rd x\)









where the improper integrals on the right hand side are convergent because the first one identifies with $\ds \int_0^\infty \frac {\sin x} x \rd x$ and the second one because $\dfrac {\sin^2 x} {x^2}$ is integrable on $\openint 0 \infty$, since it has a finite limit at $0$ and is smaller than $\frac 1 {x^2}$ at $\infty$.
Hence:

$\ds \int_0^\infty \frac {\sin x} x \rd x = \int_0^\infty {\paren {\frac {\sin x} x} }^2 \rd x$
where the second integral is absolutely convergent.
Moreover:














\(\ds \alpha \int_0^\infty \frac {\sin^2 x} x e^{-2 \alpha x} \rd x\)

\(=\)







\(\ds \alpha \int_0^\infty \frac {\sin^2 \frac x \alpha} x e^{-2 x} \rd x\)




















\(\ds \)

\(\le\)







\(\ds \alpha \paren {\int_0^\alpha \frac {\frac {x^2} {\alpha^2} } x \rd x + \int_\alpha^1 \frac 1 x \rd x + \int_1^\infty e^{-2 x} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \alpha \paren {\frac 1 2 - \ln \alpha + \frac 1 {2 e^2} }\)




















\(\ds \)

\(\to_{\alpha \mathop \to 0}\)







\(\ds 0\)









whenever $\alpha \le 1$.
Also:

$\ds \int_0^\infty {\paren {\frac {\sin x} x} }^2 e^{-2\alpha x} \rd x \to_{\alpha\to 0} \int_0^\infty {\paren {\frac {\sin x} x} }^2 \rd x$
This is because, for any positive $R$ and $\alpha$:














\(\ds \int_0^\infty {\paren {\frac {\sin x} x} }^2 \paren {1 - e^{-2 \alpha x} }\rd x\)

\(=\)







\(\ds \int_0^{\frac 1 {\sqrt \alpha} } {\paren {\frac {\sin x} x} }^2 \paren {1 - e^{-2 \alpha x} }\rd x + \int_{\frac 1 {\sqrt \alpha} }^\infty {\paren {\frac {\sin x} x} }^2 \paren {1 - e^{-2 \alpha x} }\rd x\)




















\(\ds \)

\(\le\)







\(\ds \paren {1 - e^{-2 \sqrt \alpha} } \int_0^\infty {\paren {\frac {\sin x} x} }^2 \rd x + \int_{\frac 1 {\sqrt \alpha} }^\infty {\paren {\frac {\sin x} x} }^2 \rd x\)




















\(\ds \)

\(\to_{\alpha \mathop \to 0}\)







\(\ds 0\)









because $\dfrac {\sin^2 x} {x^2}$ is integrable on $\openint 0 \infty$.

Finally, we have:














\(\ds \map I \alpha\)

\(=\)







\(\ds \alpha \int_0^\infty \frac {\sin^2 x} x e^{-2 \alpha x} \rd x + \int_0^\infty {\paren {\frac {\sin x} x} }^2 e^{-2 \alpha x} \rd x\)




















\(\ds \)

\(\to_{\alpha \mathop \to 0}\)







\(\ds \int_0^\infty {\paren {\frac {\sin x} x} }^2 \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {\sin x} x \rd x\)









as well as:














\(\ds \map I \alpha\)

\(=\)







\(\ds \frac \pi 2 - \arctan \alpha\)




















\(\ds \)

\(\to_{\alpha \mathop \to 0}\)







\(\ds \frac \pi 2\)









So that, by uniqueness of limits:

$\ds \int_0^\infty \frac {\sin x} x \rd x = \frac \pi 2$
$\blacksquare$





