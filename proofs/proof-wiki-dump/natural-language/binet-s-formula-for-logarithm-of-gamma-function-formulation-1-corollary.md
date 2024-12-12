# 

Source: https://proofwiki.org/wiki/Binet%27s_Formula_for_Logarithm_of_Gamma_Function/Formulation_1/Corollary

Corollary to Binet's Formula for Logarithm of Gamma Function: Formulation 1
Let $z$ be a complex number with a positive real part.
Then: 

$\ds \lim_{z \mathop \to \infty} \size {\Ln \map \Gamma z - \paren {z - \frac 1 2} \Ln z + z - \frac 1 2 \ln 2 \pi } \to 0$
where: 

$\Gamma$ is the Gamma function
$\Ln$ is the principal branch of the complex logarithm.


Proof













\(\ds \Ln \map \Gamma z\)

\(=\)







\(\ds \paren {z - \frac 1 2} \Ln z - z + \frac 1 2 \ln 2 \pi + \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t z} } t \rd t\)





Binet's Formula for Logarithm of Gamma Function/Formulation 1








\(\ds \leadsto \ \ \)





\(\ds \lim_{z \mathop \to \infty} \paren {\Ln \map \Gamma z - \paren {z - \frac 1 2} \Ln z + z - \frac 1 2 \ln 2 \pi}\)

\(=\)







\(\ds \lim_{z \mathop \to \infty} \paren {\int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t z} } t \rd t }\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{z \mathop \to \infty} \size {\Ln \map \Gamma z - \paren {z - \frac 1 2} \Ln z + z - \frac 1 2 \ln 2 \pi }\)

\(\to\)







\(\ds 0\)





Exponential Tends to Zero and Infinity



$\blacksquare$





