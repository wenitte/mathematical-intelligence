# 

Source: https://proofwiki.org/wiki/Norm_on_Vector_Space_is_Continuous_Function


It has been suggested that this page or section be merged into Norm is Continuous.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $V$ be a vector space with norm $\norm {\, \cdot \,}$.
The function $\norm {\, \cdot \,}: V \to \R$ is continuous.


Proof
Let $x_n \to x$ in $V$.
Then we have:

$\norm {x_n - x} \to 0$
By the Reverse Triangle Inequality:

$\size {\norm {x_n} - \norm x} \le \norm {x_n - x}$
Hence:

$\size {\norm {x_n} - \norm x} \to 0$
Thus:

$\norm {x_n} \to \norm x$
Hence the result from the definition of a continuous real function.
$\blacksquare$





