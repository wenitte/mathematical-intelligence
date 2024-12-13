# 

Source: https://proofwiki.org/wiki/User:Misael.G.Mx/Sandbox

Theorem
Let $z_1, z_2 \in \C$ be complex numbers and $\arg$ the argument operator.
Then:

$\arg \left({z_1z_2}\right) = \arg \left({z_1}\right) + \arg \left({z_2}\right)$
This means that when one multiplies two complex numbers, one must add their respective "angles", measured from the real axis.

Proof
Let $\theta_1 = \arg \left({z_1}\right),\theta_2 = \arg \left({z_2}\right)$.
Then the polar forms of $z_1,z_2$ are:

$z_1 = \left|z_1\right| \left(\cos {\theta_1} + i\sin {\theta_1}\right)$
$z_2 = \left|z_2\right| \left(\cos {\theta_2} + i\sin {\theta_2}\right)$
By the multiplication definition, factoring $\left|z_1\right|\left|z_2\right|$ from all terms, we have:

$z_1z_2 =
            \left|z_1\right|\left|z_2\right|
            \left[
                     \left(\cos {\theta_1}\cos {\theta_2}-\sin {\theta_1}\sin {\theta_2}\right) 
                  + i\left(\cos {\theta_1}\sin {\theta_2}+\sin {\theta_1}\cos {\theta_2}\right)
            \right]$

using the formulas for addition of sines and cosines, we have:

$z_1z_2 =
           \left|z_1\right|\left|z_2\right|
           \left[ 
                    \cos\left({\theta_1+\theta_2}\right)
                 + i\sin\left({\theta_1+\theta_2}\right)
           \right]$

The theorem follows from the definition of $\arg$.
$\blacksquare$





