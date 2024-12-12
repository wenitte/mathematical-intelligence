# 

Source: https://proofwiki.org/wiki/Composition_of_Dirac_Delta_Distribution_with_Function_with_Simple_Zero/Proof_2

Theorem
Let $\delta \in \map {\DD'} \R$ be the Dirac delta distribution.
Let $\sequence {\map {\delta_n} x}_{n \mathop \in \N}$ be a delta sequence.
Let $f : \R \to \R$ be a real function with a simple zero at $x_0$.
Let $f$ be strictly monotone.
Let $\phi \in \map \DD \R$ be a test function.

Then in the distributional sense it holds that:

$\ds \map \delta {\map f x} = \frac {\map \delta {x - x_0}}{\size {\map {f'} {x_0}} }$
which can be interpreted as:

$\ds \int_{-\infty}^\infty \map \delta {\map f x} \map \phi x \rd x = \frac {\map \phi {x_0}}{\size {\map {f'} {x_0}} }$
which more strictly means that:

$\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map {\delta_n} {\map f x} \map \phi x \rd x = \frac {\map \phi {x_0}}{\size {\map {f'} {x_0}} }$


Proof
Let $H$ be the Heaviside step function.
Let $T \in \map \DD \R$ be a distribution associated with $\map H {\map f x}$:

$\ds T = T_{\map H {\map f x}}$
We have that:














\(\ds \map H {\map f x}\)

\(=\)







\(\ds \begin{cases} \map H {x - x_0} & : \forall x \in \R : \map {f'} x > 0 \\ 1 - \map H {x - x_0} & : \forall x \in \R : \map {f'} x < 0 \end{cases}\)









Taking the derivative of the left hand side yields:














\(\ds \dfrac \d {\d x} \map H {\map f x}\)

\(=\)







\(\ds \dfrac {\d \map f x} {\d x} \dfrac {\d \map H {\map f x} } {\d \map f x}\)




















\(\ds \)

\(=\)







\(\ds \map {f'} x \dfrac {\d \map H {\map f x} } {\d \map f x}\)









Taking the derivative of the right hand side yields:

$\forall x \ne x_0 : \dfrac \d {\d x} \map H {\map f x} = 0$
Furthermore:

$\forall x \in \R : \map {f'} x > 0 : \paren {\map f {x_0^+} = 1} \land \paren {\map f {x_0^-} = 0}$
$\forall x \in \R : \map {f'} x < 0 : \paren {\map f {x_0^+} = 0} \land \paren {\map f {x_0^-} = 1}$
By Jump Rule the right hand side reads:














\(\ds T_{ \map H {\map f x} }'\)

\(=\)







\(\ds \begin{cases} \delta_{x_0} & : \forall x \in \R : \map {f'} x > 0 \\ -\delta_{x_0} & : \forall x \in \R : \map {f'} x < 0 \end{cases}\)









Define the composite Dirac delta distribution according to Distributional Derivative of Heaviside Step Function.
We have that:

$T_{\map H x}' = \delta_0 = \delta_x$
Then:














\(\ds T_{\map H {\map f x} }'\)

\(=\)







\(\ds T_{\map {f'} x \frac {\d \map H {\map f x} } {\d \map f x} }\)





Derivative of Composite Function














\(\ds \)

\(=\)







\(\ds \map {f'} x \delta_{\map f x}\)





Multiplication of Distribution induced by Locally Integrable Function by Smooth Function



Hence:














\(\ds \forall x \in \R : \map {f'} x\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \size {\map {f'}  x} \delta_{\map f x}\)

\(=\)







\(\ds \delta_{x_0}\)














\(\ds \leadsto \ \ \)





\(\ds \delta_{\map f x}\)

\(=\)







\(\ds \frac {\delta_{x_0} } {\size {\map {f'} x} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\delta_{x_0} } {\size {\map {f'} {x_0} } }\)





Product of Smooth Function and Dirac Delta Distribution



and:














\(\ds \forall x \in \R : \map {f'} x\)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds -\size {\map {f'} x} \delta_{\map f x}\)

\(=\)







\(\ds -\delta_{x_0}\)














\(\ds \leadsto \ \ \)





\(\ds \delta_{\map f x}\)

\(=\)







\(\ds \frac {\delta_{x_0} } {\size {\map {f'}  x} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\delta_{x_0} } {\size {\map {f'}  {x_0} } }\)





Product of Smooth Function and Dirac Delta Distribution



$\blacksquare$


Further research is required in order to fill out the details.In particular: The way composite Dirac distribution is introduced here is too sketchy.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by finding out more.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Research}} from the code.




