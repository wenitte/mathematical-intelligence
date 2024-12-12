# 

Source: https://proofwiki.org/wiki/Atomic_Electric_Field_at_Point_within_Body_of_Matter

Theorem
Let $B$ be a body of matter.
Let $P$ be a point inside $B$ whose position vector is $\mathbf r$.

The atomic electric field at $P$ is given by:

$\ds \map {\mathbf E_{\text {atomic} } } {\mathbf r} = \dfrac 1 {4 \pi \varepsilon_0} \int_{\text {all space} } \dfrac {\paren {\mathbf r - \mathbf r'} \map {\rho_{\text {atomic} } } {\mathbf r'} } {\size {\mathbf r - \mathbf r'}^3} \rd V'$
where:

$\d V'$ is an infinitesimal volume element
$\mathbf r'$ is the position vector of $\d V'$
$\map {\rho_{\mathrm {atomic} } } {\mathbf r'}$ is the atomic charge density caused by the electric charges within the atoms that make up $B$
$\varepsilon_0$ denotes the vacuum permittivity.


Proof
From Electric Field Strength from Assemblage of Point Charges, the electric field strength caused by an assemblage of point charges $q_1, q_2, \ldots, q_n$ is given by:

$\ds \map {\mathbf E} {\mathbf r} = \dfrac 1 {4 \pi \epsilon_0} \sum_i \dfrac {\paren {\mathbf r - \mathbf r_i} q_i} {\size {\mathbf r - \mathbf r_i}^3}$
where $\mathbf r_1, \mathbf r_2, \ldots, \mathbf r_n$ are the position vectors of $q_1, q_2, \ldots, q_n$ respectively.
We apply the same principle to the atomic charge density and convert the summation into a definite integral, as follows:

Consider an infinitesimal volume element $\d V'$:


The electric field strength caused by $\d V'$ is:

$\map {\mathbf E_{\text {atomic} } } {\mathbf r'} = \dfrac 1 {4 \pi \epsilon_0} \dfrac {\paren {\mathbf r - \mathbf r'} \rd q} {\size {\mathbf r - \mathbf r'}^3}$
where $\d q$ is the electric charge on $\d V'$.
By definition of electric charge density:

$\map {\rho_{\mathrm {atomic} } } {\mathbf r'} = \dfrac {\d q} {\d V'}$
and so:

$\map {\mathbf E_{\text {atomic} } } {\mathbf r'} = \dfrac 1 {4 \pi \epsilon_0} \dfrac {\paren {\mathbf r - \mathbf r'} \map {\rho_{\mathrm {atomic} } } {\mathbf r'} } {\size {\mathbf r - \mathbf r'}^3} \rd V'$

Integrating over all space:

$\ds \map {\mathbf E_{\text {atomic} } } {\mathbf r} = \dfrac 1 {4 \pi \varepsilon_0} \int_{\text {all space} } \dfrac {\paren {\mathbf r - \mathbf r'} \map {\rho_{\text {atomic} } } {\mathbf r'} } {\size {\mathbf r - \mathbf r'}^3} \rd V'$
Hence the result.
$\blacksquare$


Sources
1990: I.S. Grant and W.R. Phillips: Electromagnetism (2nd ed.) ... (previous) ... (next): Chapter $1$: Force and energy in electrostatics: $1.3$ Electric Fields in Matter: $1.3.2$ The atomic electric field: $(1.7)$




