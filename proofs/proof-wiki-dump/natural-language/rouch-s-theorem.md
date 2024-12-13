# 

Source: https://proofwiki.org/wiki/Rouch%C3%A9%27s_Theorem

Theorem
Let $\gamma$ be a closed contour.
Let $D$ be the region enclosed by $\gamma$. 
Let $f$ and $g$ be complex-valued functions which are holomorphic in $D$. 
Let $\cmod {\map g z} < \cmod {\map f z}$ on $\gamma$.

Then $f$ and $f + g$ have the same number of zeroes in $D$ counted up to multiplicity. 


Proof
Let $N_f$ and $N_{f + g}$ be the number of zeroes of $f$ and $f + g$ in $D$ respectively. 
By the Argument Principle: 

$\ds N_f = \frac 1 {2 \pi i} \oint_\gamma \frac {\map {f'} z} {\map f z} \rd z$
Similarly: 

$\ds N_{f + g} = \frac 1 {2 \pi i} \oint_\gamma \frac {\map {\paren {f + g}'} z} {\map {\paren {f + g} } z} \rd z$
We aim to show that $N_f = N_{f + g}$. 
From $\cmod {\map g z} < \cmod {\map f z}$ we have that $f$ is non-zero on $\gamma$, otherwise we would have $\cmod {\map g z} < 0$. 
From the fact that $\cmod {\map g z} \ne \cmod {\map f z}$ we also have that $\map g z \ne - \map f z$, so $f + g$ is also non-zero on $\gamma$. 
We have: 














\(\ds N_{f + g} - N_f\)

\(=\)







\(\ds \frac 1 {2 \pi i} \oint_\gamma \frac {\map {\paren {f + g}'} z} {\map {\paren {f + g} } z} \rd z - \frac 1 {2 \pi i} \oint_\gamma \frac {\map {f'} z} {\map f z} \rd z\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \oint_\gamma \paren {\frac {\map {\paren {f + g}'} z} {\map {\paren {f + g} } z} - \frac {\map {f'} z} {\map f z} } \rd z\)





Linear Combination of Contour Integrals














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \oint_\gamma \paren {\frac {\map {\paren {f \paren {1 + \frac g f} }'} z} {\map {\paren {\map f {1 + \frac g f} } } z} - \frac {\map {f'} z} {\map f z} } \rd z\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \oint_\gamma \paren {\frac {\map {\paren {\map {f'} {1 + \frac g f} } } z} {\map {\paren {\map f {1 + \frac g f} } } z} + \frac {\map {\paren {\map f {1 + \frac g f}'} } z} {\map {\paren {\map f {1 + \frac g f} } } z} - \frac {\map {f'} z} {\map f z} } \rd z\)





Product Rule for Derivatives



So:














\(\ds \frac 1 {2 \pi i} \oint_\gamma \paren {\frac {\map {\paren {f' \paren {1 + \frac g f} } } z} {\map {\paren {f \paren {1 + \frac g f} } } z} +  \frac {\map {\paren {f \paren {1 + \frac g f}'} } z} {\map {\paren {\map f {1 + \frac g f} } } z} - \frac {\map {f'} z} {\map f z} } \rd z\)

\(=\)







\(\ds \frac 1 {2 \pi i} \oint_\gamma \paren {\frac {\map {f'} z} {\map f z} + \frac {\map {\paren {1 + \frac g f}'} z} {\map {\paren {1 + \frac g f} } z} - \frac {\map {f'} z} {\map f z} } \rd z\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \oint_\gamma \frac {\map {\paren {1 + \frac g f}'} z} {\map {\paren {1 + \frac g f} } z} \rd z\)









For brevity, write: 

$F = 1 + \dfrac g f$
As $\cmod {\dfrac g f} < 1$ on $\gamma$, we must have: 

$\cmod {\map \Re {\dfrac g f} } < 1$
That is:

$0 < \map \Re F < 2$
on $\gamma$. 
That is, the image of $\gamma$ under $F$ does not encircle $0$. 
So, by the definition of winding number, we have:

$\map {\mathrm {Ind}_{\map F \gamma} } 0 = 0$
So: 














\(\ds \frac 1 {2 \pi i} \oint_\gamma \frac {\map {F'} z} {\map F z} \rd z\)

\(=\)







\(\ds \frac 1 {2 \pi i} \oint_{\map F \gamma} \frac 1 z \rd z\)




















\(\ds \)

\(=\)







\(\ds \map {\mathrm {Ind}_{\map F \gamma} } 0\)





Definition of Winding Number














\(\ds \)

\(=\)







\(\ds 0\)









Hence:

$N_{f + g} = N_f$
$\blacksquare$


Source of Name
This entry was named for Eugène Rouché.





